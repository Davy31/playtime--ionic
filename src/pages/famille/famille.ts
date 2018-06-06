import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnfantPage } from '../../pages/enfant/enfant';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import { ChildProvider} from '../../providers/api-base/child';
import { NgForm } from '@angular/forms';

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
  userPseudo: string;
  childs:any;
  
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public  afAuth: AngularFireAuth,
              private toastProvider: ToastProvider,
              private userProvider: UserProvider,
              private childProvider: ChildProvider
            ) {
  }


  ionViewDidLoad() {  

    console.clear();
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user) {      
        this.isAuth = true;
        this.userAuthId = this.afAuth.auth.currentUser.uid;
      } else {
    
        this.isAuth = false;
        this.userAuthId = "0";
      }  
    });

    this.userProvider.getUser(this.userAuthId);
    console.log('Pseudo: ' + this.userProvider.userPseudo);
    this.userPseudo = this.userProvider.userPseudo;
    this.childs = this.childProvider.getListChildByUser(this.userAuthId);
    console.log('Tableau famille');
    console.log(this.childs);
  }


  onLienFormEnfant = (childId:number) =>{
    this.navCtrl.push(EnfantPage, {id: childId});
  }


  

  

}
