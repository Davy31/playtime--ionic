import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import { HomePage } from '../home/home';
import { FamillePage } from '../famille/famille';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  api_result:any;

  username="username";
  email = "toto@enshort.com";
  password = "123456";
  passwordCopie = "123456";

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private toastProvider: ToastProvider,
               private userProvider: UserProvider,
               private  storage: Storage
               ) {}


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

    if(form.controls['password'].value != form.controls['passwordCopie'].value ){
      this.toastProvider.presentToast('Les mots de passe doivent être identiques !!!');
      return;
    }

    if(form.controls['username'].invalid){
      this.toastProvider.presentToast('Le pseudo doit comporter au moins 3 caractères !!!');
      return;
    }   
    
     this.userProvider.register(form.controls['email'].value, form.controls['password'].value, form.controls['username'].value)
     .subscribe((data:any) => {
       if(data.success){
         // stocke les identifiants 
       
        this.storage.set('user_id', data.result.userId);
        this.storage.set('user_username', form.controls['username'].value);
        this.storage.set('user_email', form.controls['email'].value);       
        this.toastProvider.presentToast('Inscription validée !!!');
        
        this.navCtrl.setRoot( FamillePage);
       }else{
        this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
      this.toastProvider.presentToast('Inscription impossible :'+ err);
      console.log(err)
     });
  }

}
