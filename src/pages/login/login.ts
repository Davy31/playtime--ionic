import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';

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


  onSubmit = (form:NgForm) => {

    // Teste le formulaire
    console.log(form.value);
    console.log('valide: '+ form.valid);

    // si formulaire invalide affiche la première erreur
    if(form.controls['email'].invalid){
      this.toastProvider.presentToast('L\'adresse email est invalide !!!');
      return;
    }

    if(form.controls['password'].invalid){
      this.toastProvider.presentToast('Le mot de passe doit comporter au moins 6 caractères !!!');
      return;
    }

   
    //************************** Tentative inscription firebase
      this.afAuth.auth.signInWithEmailAndPassword(form.controls['email'].value,form.controls['password'].value)
      
      .then((data)=>{
      //************************** Connexion validée
      const user_id = data.user.uid;
      
      
      this.toastProvider.presentToast("Heureux de vous revoir");  
     
      //----------- Retour Home
      this.navCtrl.setRoot( HomePage);
    
      })
    //************************** Connexion refusée
     .catch((erreur) => {  
      this.toastProvider.presentToast(this.toastProvider.get_messagesErreurs(erreur.code));     
     });
    
  }

  
    
  

}