import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnfantPage } from '../../pages/enfant/enfant';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { ToastProvider }  from '../../providers/toast/toast';
import { ConnexionPage }  from '../../pages/connexion/connexion';
import { ChronoPage }  from '../../pages/chrono/chrono';
import { UserProvider} from '../../providers/api-base/user';
import { ChildProvider} from '../../providers/api-base/child';
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
              private toastProvider: ToastProvider,
              private userProvider: UserProvider,
              private childProvider: ChildProvider,
              private storage: Storage
             
            ) {}


  ionViewDidLoad() {

    console.clear();
    console.log("famille");
    this.storage.get('playtime_user_id').then((val) =>{
    
      if ((val == null)){
        this.toastProvider.presentToast("Vous n'êtes pas connecté");
        this.navCtrl.setRoot( ConnexionPage );
      }else{
         /// *****Connecté *******************/
        this.user_id = val;
        this.isAuth=true;
        console.log("id= " + this.user_id);
        this.getListChild(this.user_id);
      }
     }).catch((err) =>{
       this.toastProvider.presentToast("Vous n'êtes pas connecté");
       this.navCtrl.setRoot( ConnexionPage);
     })

     this.storage.get('playtime_user_username').then((val) =>{
      this.user_username= val
      console.log(this.user_username) ;
     }).catch((err) =>{
       this.toastProvider.presentToast("Vous n'êtes pas connecté");
       this.navCtrl.setRoot( ConnexionPage);
     })    
    
  }


   /**********recupere sur la base la liste des enfants************************************/
  getListChild = (param_user_id:number) =>{
    
    this.childProvider.getListChildByUser(param_user_id)
   .subscribe((data:any) => {
     if(data.success){ 
      this.childs = data.result;

    }else{  
     this.toastProvider.presentToast(data.message);
    }
   
  }, (err: any) => {
   this.toastProvider.presentToast('Pas d\'enfants :'+ err);
   console.log(err)
  }); 
}

  onLinkChrono = (childId:number) => {
    console.log('childId:' + childId);
    this.navCtrl.setRoot(ChronoPage, {id: childId});
  }

  onLinkDashboardChild = (childId:number) => {
    console.log('Dashboard id:' + childId);
    this.navCtrl.setRoot(DashboardPage, {id: childId});
  }

  onLinkFormChild = (param_childId:number) => {
    this.navCtrl.setRoot(EnfantPage, {userId: this.user_id,childId: param_childId} );
  }

  

}
