import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  effacePassword(password, password2){
    password.value="";
    password2.value="";
  }
  onInscription = (email, password, password2) => {
    
    
    if(email.value===""){
      this.presentToast("L'e-mail doit être renseigné!!!");
      this.effacePassword(password, password2);
      return;
    }
    if(password.value===""){
      this.presentToast("Le mot de passe doit être renseigné!!!");
      this.effacePassword(password, password2);
      return;
    }
    if(password2.value===""){
      this.presentToast("Le mot de passe de confirmation doit être renseigné!!!");
      this.effacePassword(password, password2);
      return;
    }

    if(password.value===password2.value){
      this.presentToast("Les mots de passe doivent être identiques!!!");
      this.effacePassword(password, password2);
      return;
    }
    
  }

}
