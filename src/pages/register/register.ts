import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private toastProvider: ToastProvider,
               private afAuth: AngularFireAuth
               ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  
  effacePassword(password, password2){
    password.value="";
    password2.value="";
  }

  onInscription = (email, password, password2) => {   
    
   
    
    if(email.value===""){
      this.toastProvider.presentToast('hgtrhtrh');
      this.effacePassword(password, password2);
      return;
    }
    if(password.value===""){
      this.toastProvider.presentToast("Le mot de passe doit être renseigné!!!");
      this.effacePassword(password, password2);
      return;
    }
    if(password2.value===""){
      this.toastProvider.presentToast("Le mot de passe de confirmation doit être renseigné!!!");
      this.effacePassword(password, password2);
      return;
    }

    if(password.value!==password2.value){
      this.toastProvider.presentToast("Les mots de passe doivent être identiques!!!");
      this.effacePassword(password, password2);
      return;
    }

    // Connexion validée
     this.afAuth.auth.createUserWithEmailAndPassword(email.value,password.value).then((data)=>{
      this.toastProvider.presentToast("bienvenue parmis nous!!!");
      setTimeout(() => {
        this.navCtrl.setRoot( HomePage);
     },4000);
    })
     .catch((erreur) => {
      this.toastProvider.presentToast(erreur.message);
      this.effacePassword(password, password2);
     });

    
    

     
    
  }

}
