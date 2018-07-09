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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
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
  timeWin = moment({year:0,month:0, day:0, hour:0, minute:0 }).format('HH:mm') ;
  name: string;
  childDetail:any;



  
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

    this.calculTime();
  
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
      this.calculTime();
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


  calculTime = () =>{
    /*
    this.actionsSelected.forEach(element => {
      let temps = moment(element.timep,'HH:mm:ss');
      moment(this.timeWin).add(120,'m');
     console.log(this.timeWin);*/
     
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
    this.calculTime();
  }
  
  onLinkFamily = () => {
    this.navCtrl.setRoot(FamillePage);
  }
  
  onLinkChrono = () => {
    this.navCtrl.setRoot(ChronoPage);
  }
   

}
