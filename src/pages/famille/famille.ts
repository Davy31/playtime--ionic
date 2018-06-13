import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnfantPage } from '../../pages/enfant/enfant';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastProvider }  from '../../providers/toast/toast';
import { LoginPage }  from '../../pages/login/login';
import { UserProvider} from '../../providers/api-base/user';
import { ChildProvider} from '../../providers/api-base/child';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FamillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-famille',
  templateUrl: 'famille.html',
})
export class FamillePage {

  isAuth: boolean;
  user_id: number;
  user_username: string;
  stateConnexion: string;
  userPseudo: string;
  childs:any;
  
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public  afAuth: AngularFireAuth,
              private toastProvider: ToastProvider,
              private userProvider: UserProvider,
              private childProvider: ChildProvider,
              private storage: Storage
             
            ) {
  }


  ionViewDidLoad() {  

    console.clear();
    this.storage.get('user_id').then((val) =>{
     
      if ((val == null)){
        this.toastProvider.presentToast("Vous n'êtes pas connecté");
        this.navCtrl.setRoot( LoginPage);
      }else{
        this.user_id = val;
        this.isAuth=true;
      }
     }).catch((err) =>{
       this.toastProvider.presentToast("Vous n'êtes pas connecté");
       this.navCtrl.setRoot( LoginPage);
     })

     this.storage.get('user_username').then((val) =>{
      this.user_username= val
      console.log(this.user_username) ;
     }).catch((err) =>{
       this.toastProvider.presentToast("Vous n'êtes pas connecté");
       this.navCtrl.setRoot( LoginPage);
     })
   
/*
    this.userProvider.getUser(this.userAuthId);
    console.log('Pseudo: ' + this.userProvider.userPseudo);
    this.userPseudo = this.userProvider.userPseudo;
    this.childs = this.childProvider.getListChildByUser(this.userAuthId);
    console.log('Tableau famille');
    console.log(this.childs);
  
*/
  }
  onLinkChronoChild = (childId:number) => {
    console.log('Chrono id:' + childId);
    this.navCtrl.push(EnfantPage, {id: childId});
  }

  onLinkDashboardChild = (childId:number) => {
    console.log('Dashboard id:' + childId);
    this.navCtrl.push(DashboardPage, {id: childId});
  }

  onLinkFormChild = (childId:number) => {
    console.log('Enfant id:' + childId);
    //this.navCtrl.push(EnfantPage, {id: childId});
  }

 
  

  

}
