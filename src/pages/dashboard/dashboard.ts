import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Select } from 'ionic-angular';
import { DashboardProvider} from '../../providers/api-base/dashboard';
import { ChildProvider} from '../../providers/api-base/child';
import { ToastProvider }  from '../../providers/toast/toast';
import { FamillePage }  from '../../pages/famille/famille';
import { ChronoPage }  from '../../pages/chrono/chrono';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Page Dashboard de l'enfant liste des actiosn et calcule du temps gagné
 
 */


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  @ViewChild('selectAction') selectRef: Select;

  isAuth: boolean;
  userAuthId: string;
  stateConnexion: string;
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
  
  selectOptions = {
    title: 'Selectionner  des actions',
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

    console.clear();
    console.log('Page dashboard');

    if(this.navParams.get('id')){
      this.childId = this.navParams.get('id');
      console.log("childId=" + this.childId);
    }else{
      console.log("il manque le parametre id enfant");
      this.navCtrl.setRoot(FamillePage);
    }

    this.getListActionsByChild();

    this.getListActionsNoSelected();

    this.getDetailChild();
  
  }
  //----------------- Rècupere les actions affectés à l'enfant --------------------------*
  getListActionsByChild = () => {
    this.dashboardProvider.getListActionByChild(this.childId)   
    .subscribe((data:any) => {
      if(data.success){       
      this.actionsSelected =  data.result;  
      console.log( this.actionsSelected);
    }else{  
      this.toastProvider.presentToast(data.message);
    }
    
    }, (err: any) => {
      
      console.log(err)
    });   
  } 

  getDetailChild(){

    this.childDetail= this.childProvider.getDetailChild(this.childId)
      .subscribe((data:any) => {
        if(data.success){ 
         // console.log(data.result);
          this.childDetail = data.result;
        console.log(this.childDetail);
          this.name = this.childProvider.getName( this.childDetail);
          this.winTime = this.childDetail["0"].winTime;
          this.playTime= this.childDetail["0"].playTime;
          this.winTime = this.childDetail["0"].winTime;
          this.remainingTime = this.winTime - this.playTime ;
          this.winTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.winTime);
          this.playTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.playTime);
          this.remainingTimeDisplay = this.dashboardProvider.convertMinuteHeure(this.remainingTime);
          console.log(data)
          console.log('wintime='+ this.winTime);
       }else{  
         console.log(data)
          this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
     
      console.log(err)
     }); 
  }
  //-----------------Récupère la liste des actions non affectées
  getListActionsNoSelected = () => {
      this.dashboardProvider.getListActionsNoSelected(this.childId)
    .subscribe((data:any) => {
      if(data.success){ 
      this.actionsNoSelected = data.result;
      //console.log( this.actionsNoSelected )
      }else{  
      this.toastProvider.presentToast(data.message);
      }
    
    }, (err: any) => {
    console.log(err)
    });   
  } 

  
  onOpenSelectAction = () => {
    this.selectRef.open();
  }
  
  onAffectAction = () =>{
      this.dashboardProvider.affectActionChild(this.childId,this.action)
    .subscribe((data:any) => {
      if(data.success){ 
      console.log("Affectations faites");
      console.log(data.message);
      this.navCtrl.setRoot(DashboardPage, {id: this.childId});
      }else{  
      this.toastProvider.presentToast(data.message);
      }
    
    }, (err: any) => {
    console.log(err)
    });   
  }


  onAddRealisedAction = (action_id) => {
    // Ajout 1 à l'action
    let resultat = this.actionsSelected.find( action => action.id === action_id);
    resultat.nbRealised ++;
    
    this.changeRealisedAction("add",action_id);  
    
  }

  onRemoveRealisedAction = (action_id) => {
    let resultat = this.actionsSelected.find( action => action.id === action_id);
  
    if(resultat.nbRealised<1){
      console.log("ATTENTION");
      const confirm = this.alertCtrl.create({
      title: 'Voulez-vous vraiment enlever cettte  action du  dashboard de l\'enfant ?',
      buttons: [
            {
              text: 'Annuler',
              handler: () => {
                console.log('Annuler');
              }
            },
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
    }    
  }


  deleteAffectation = (action_id: number) => {
    
    this.dashboardProvider.deleteAffectation(action_id)
    .subscribe((data:any) => {
      console.log("succes:" + data.success);
      if(data.success){       
        console.log(data.message);
        this.navCtrl.setRoot(DashboardPage, {id: this.childId});
      }else{  
        this.toastProvider.presentToast(data.message);
      }
    
    }, (err: any) => {
    console.log(err)
    }); 
  }

  changeRealisedAction = (action: string, action_id:number) =>{
    
    this.dashboardProvider.changeNbRealisedAction(action,action_id)
    .subscribe((data:any) => {
      console.log("succes" + action_id + " :" + data.success);
      if(data.success){       
        console.log(data.message);
        this.navCtrl.setRoot(DashboardPage, {id: this.childId});
      }else{  
        this.toastProvider.presentToast(data.message);
      }
    
    }, (err: any) => {
    console.log(err)
    }); 
    
  }
  
  onLinkFamily = () => {
    this.navCtrl.setRoot(FamillePage);
  }
  
  onLinkChrono = () => {
    this.navCtrl.setRoot(ChronoPage, {id: this.childId  });
  }
   

}
