import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';

import { FamillePage } from '../famille/famille';

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
              public toastProvider: ToastProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  onSubmit = (form:NgForm) => {

    // Teste le formulaire
    

    // si formulaire invalide affiche la première erreur
    if(form.controls['email'].invalid){
      this.toastProvider.presentToast('L\'adresse email est invalide !!!');
      return;
    }

    if(form.controls['password'].invalid){
      this.toastProvider.presentToast('Le mot de passe doit comporter au moins 6 caractères !!!');
      return;
    }

  
  }

  
    
  

}