import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Select } from 'ionic-angular';
import { DashboardProvider} from '../../providers/api-base/dashboard';
import { ChildProvider} from '../../providers/api-base/child';
import { ToastProvider }  from '../../providers/toast/toast';
import { FamillePage }  from '../../pages/famille/famille';
import { ChronoPage }  from '../../pages/chrono/chrono';
import { AlertController } from 'ionic-angular';

/**
 * Page Dashboard de l'enfant liste des actiosn et calcule du temps gagné

 */


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  @ViewChild('selectAction') selectRef: Select;


  childId:number;
  actionsSelected = [];
  actionsNoSelected = [];
  action:any;
  name: string;
  childDetail:any;
  winTime:number;
  playTime:number;
  remainingTime:number;
  winTimeDisplay : string;
  playTimeDisplay : string;
  remainingTimeDisplay : string;
  isAction  = true;
  displayBtnReset = true;
  isListActionsNotSelectedReady = false;
  displayBtn = true ;

  selectOptions = {
    title: 'Sélectionnez  des actions',
    subTitle: '',
    mode: 'md'
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastProvider : ToastProvider,
    private dashboardProvider: DashboardProvider,
    private childProvider: ChildProvider,
    public alertCtrl: AlertController
  ) {}


  ionViewDidLoad() {


    // ******* Contrôle si que l'identifiant enfant est bien envoyé *******
    if(this.navParams.get('id')){
      this.childId = this.navParams.get('id');
    }else{
      console.log("il manque le parametre id enfant");
      this.navCtrl.setRoot(FamillePage);
    }

    this.getListActionsByChild();

    this.getListActionsNoSelected();

    this.getDetailChild();

    this.manageDisplay();

  }

  /** ****** Rècupere les actions affectés à l'enfant *******/
  getListActionsByChild = () => {
    this.dashboardProvider.getListActionByChild(this.childId)
      .subscribe((data:any) => {
        if(data.success){
          this.actionsSelected =  data.result;

          if(data.result.length>0){
            this.isAction = true;
          }else{
            this.isAction = false;
          }
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {

        console.log(err)
      });
  }

  /** ****** Rècupere les infos de l'enfant ****** */
  getDetailChild(){
    this.childDetail= this.childProvider.getDetailChild(this.childId)
      .subscribe((data:any) => {
        if(data.success){
          this.childDetail = data.result;
          this.name = this.childProvider.getName( this.childDetail);
          this.winTime = this.childDetail["0"].winTime;
          this.playTime= this.childDetail["0"].playTime;
          this.remainingTime = this.winTime - this.playTime ;
          this.winTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.winTime);
          this.playTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.playTime);
          this.remainingTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.remainingTime);
          this.manageDisplay();
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {

        console.log(err)
      });
    this.manageDisplay();
  }
  /** *****Récupère la liste des actions non affectées ************/
  getListActionsNoSelected = () => {
    this.dashboardProvider.getListActionsNoSelected(this.childId)
      .subscribe((data:any) => {
        if(data.success){
          this.actionsNoSelected = data.result;
          this.isListActionsNotSelectedReady = true;
          this.manageDisplay();
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {
        console.log(err)
      });

  }

  /**  ******* gere l'affiche des elements ****** */
  manageDisplay = () => {

    // Affichage du bouton reset
    if(this.isAction || this.playTime!=0){
      this.displayBtnReset = true;
    }else{
      this.displayBtnReset = false;
    }

  }

  /**  ******* Ouvre la liste des actions ******* */
  onOpenSelectAction = () => {
    this.selectRef.open();
  }

  /** *********** affecte  les actions ******* */
  onAffectAction = () =>{
    this.dashboardProvider.affectActionChild(this.childId,this.action)
      .subscribe((data:any) => {
        if(data.success){
          this.navCtrl.setRoot(DashboardPage, {id: this.childId});
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {
        console.log(err)
      });
    this.manageDisplay();
  }

  /******** ajoute  1 au compteur d'une action ******* */
  onAddRealisedAction = (action_id) => {

    /**Ajout 1 à l'action **/
    let resultat = this.actionsSelected.find( action => action.id === action_id);
    resultat.nbRealised ++;
    this.changeRealisedAction("add",action_id);
    this.manageDisplay();
  }

  /** ****** Controle le compteur si demande d'enlever 1 ******* */
  onRemoveRealisedAction = (action_id) => {
    let resultat = this.actionsSelected.find( action => action.id === action_id);

    // ******* si 0, demande confirmation d'enlever l'action *******
    if(resultat.nbRealised<1){
      const confirm = this.alertCtrl.create({
        title: 'Voulez-vous vraiment enlever cettte  action du  tableau de bord de l\'enfant ?',
        buttons: [
          {
            text: 'Annuler',
            handler: () => {} },
          {
            text: 'OUI',
            handler: () => {
              this.deleteAffectation(action_id);
            }
          }
        ]
      });
      confirm.present();

    }else{
      this.changeRealisedAction("sub",action_id);
      /** enleve 1 à l'action **/
      resultat.nbRealised --;
    }
    this.manageDisplay();
  }

  /** ********* enleve l'action ******** */
  deleteAffectation = (action_id: number) => {
    this.dashboardProvider.deleteAffectation(action_id)
      .subscribe((data:any) => {
        if(data.success){
          this.navCtrl.setRoot(DashboardPage, {id: this.childId});
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {
        console.log(err)
      });
    this.manageDisplay();
  }

  /**  ******** modifie le compteur d'une action ******* */
  changeRealisedAction = (action: string, action_id:number) =>{

    /***** cache les boutons**********/
    this.displayBtn = false;

    this.dashboardProvider.changeNbRealisedAction(action,action_id,this.childId)
      .subscribe((data:any) => {
        this.displayBtn = true;
        if(data.success){
          console.log(data.result.winTime);
          this.winTime = data.result.winTime;
          this.remainingTime = this.winTime - this.playTime ;
          this.winTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.winTime);
          this.playTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.playTime);
          this.remainingTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.remainingTime);
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {
        console.log(err)
      });
    this.manageDisplay();
  }


  /** ******** reinitialise le temsp et les compteurs action apres confirmation *****/
  onReset = () => {
    console.clear();
    const confirm = this.alertCtrl.create({
      title: 'Voulez-vous vraiment mettre le temps et les actions à 0 ?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {}
        },
        {
          text: 'OUI',
          handler: () => {
            this.dashboardProvider.resetTimeAction(this.childId)
              .subscribe((data:any) => {
                if(data.success){
                  console.log(data.message);
                  this.toastProvider.presentToast("Les actions et le temps ont étés remis à 0");
                  this.navCtrl.setRoot(DashboardPage, {id: this.childId});
                }else{
                  this.toastProvider.presentToast(data.message);
                }
              }, (err: any) => {
                console.log(err)
              });
          }
        }
      ]
    });
    confirm.present();

  }



  /** ********* Boutons de navigations ******** */
  onLinkFamily = () => {
    this.navCtrl.setRoot(FamillePage);
  }

  onLinkChrono = () => {
    this.navCtrl.setRoot(ChronoPage, {id: this.childId  });
  }


}
