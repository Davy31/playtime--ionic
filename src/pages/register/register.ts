import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private toastProvider: ToastProvider,
               private afAuth: AngularFireAuth
               ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onSubmit = (form:NgForm) => {

    // Teste le formulaire
    console.log(form.value);
    console.log('valide: '+ form.valid);

    // si formulaire invalide affiche la première erreur
    if(form.controls['email'].invalid){
      this.toastProvider.presentToast('L\'email est invalide !!!');
      return;
    }

    if(form.controls['password'].invalid){
      this.toastProvider.presentToast('Le mot de passe doit comporter au moins 6 caractères !!!');
      return;
    }

    if(form.controls['password'].value != form.controls['passwordCopie'].value ){
      this.toastProvider.presentToast('Les mots de passe doivent être identiques !!!');
      return;
    }

    if(form.controls['pseudo'].invalid){
      this.toastProvider.presentToast('Le pseudo doit comporter au moins 3 caractères !!!');
      return;
    }      
    
    //************************** Connexion validée
     this.afAuth.auth.createUserWithEmailAndPassword(form.controls['email'].value,form.controls['password'].value).then((data)=>{

      const user_id = data.user.uid;

      this.toastProvider.presentToast("Bienvenue parmis nous " + form.controls['pseudo'].value + " !!!");
      // *********création  l'utilisateur sur la base de données mySql**************

      //----------- Retour Home
      setTimeout(() => {
        this.navCtrl.setRoot( HomePage);
     },4000);
    })
     .catch((erreur) => {
       console.log(erreur);
      this.toastProvider.presentToast(erreur.message);
     
     });
    
  }

}
