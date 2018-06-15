import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, Select } from 'ionic-angular';
import { ActionProvider} from '../../providers/api-base/action';
import { DashboardProvider} from '../../providers/api-base/dashboard';
import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import { ChildProvider} from '../../providers/api-base/child';
import { ModalActionPage } from '../../pages/modal-action/modal-action';
import { ModalController } from 'ionic-angular';
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
  dashActions = [];
  listActions = [];
  listActionsFree = [];

  selectOptions = {
    title: 'Pizza Toppings',
    subTitle: 'Select your toppings',
    mode: 'md'
  };
  

  constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          public toastProvider : ToastProvider,
         private userProvider: UserProvider,
         private childProvider: ChildProvider,
         private actionProvider : ActionProvider,
         private dashboardProvider: DashboardProvider,
         public modalCtrl: ModalController
          ) {}


  ionViewDidLoad() {

    if(this.navParams.get('id')){
      this.childId = this.navParams.get('id');
    }else{
      this.childId =1;
    }
    
    // Créé un array des actions non utilisées
    let actionId    
    this.dashActions = this.dashboardProvider.getListActionByChild(this.childId);
    //console.log(this.dashActions);
    this.listActions = this.actionProvider.getListAction();
    this.listActionsFree = this.listActions;
    //console.log(this.listActions);
    for (var i = 0, len = this.dashActions.length; i < len; i++) {
      actionId= (this.dashActions[i].idAction) - 1;
      //console.log('actionId=' + actionId);
      this.listActionsFree.splice(actionId,1);

    };
    //console.log(this.listActionsFree);
    
  }

  
  onOpenSelectAction = () => {
    this.selectRef.open();
  }
  onAddRealisedAction = () => {
    this.toastProvider.presentToast("ca marche");
    console.log("click +");
  }

  
  
   

}
