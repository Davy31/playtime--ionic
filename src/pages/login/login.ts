import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastProvider: ToastProvider,
              private afAuth: AngularFireAuth ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  effacePassword(password){
    password.value="";
    
  }
  

  onConnexion = (email, password) => {    
  
   

    if(email.value===""){
      this.toastProvider.presentToast('hgtrhtrh');
      this.effacePassword(password);
      return;
    }
    if(password.value===""){
      this.toastProvider.presentToast("Le mot de passe doit être renseigné!!!");
      this.effacePassword(password);
      return;
    }
    
   
    this.afAuth.auth.signInWithEmailAndPassword(email.value,password.value)
    .then( (date) => {
      this.toastProvider.presentToast("bienvenue parmis nous!!!");
      setTimeout(() => {
        this.navCtrl.setRoot( HomePage);
     },4000);
    })
    .catch((erreur) => {
      this.toastProvider.presentToast(erreur.message);
      this.effacePassword(password);
     });

    

    //this.navCtrl.setRoot( HomePage);
    
  }

}