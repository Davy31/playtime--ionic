import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnfantPage } from '../../pages/enfant/enfant';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import  firebase from 'firebase';
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
  userAuthId: string;
  stateConnexion: string;
  text_user_name = 'pseudo';
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public  afAuth: AngularFireAuth,
              private toastProvider: ToastProvider,
              private userProvider: UserProvider
            ) {
  }


  ionViewDidLoad() {   
    
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user) {      
        this.isAuth = true;
        this.userAuthId = this.afAuth.auth.currentUser.uid;
      } else {
    
        this.isAuth = false;
        this.userAuthId = "0";  

      }  
    });
  }
  onUpdatePseudo = () => {

  }
  onLienFormEnfant = () =>{
    this.navCtrl.push(EnfantPage, {id: this.userAuthId});
  }

}
