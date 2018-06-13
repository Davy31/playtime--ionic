import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import { FamillePage } from '../famille/famille';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  api_result:any;

  user_id:number;
  messageToast:string;
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


  
  ionViewDidLoad() {
    //efface les identifiants sur le device
    this.storage.clear();
  }

  onSubmit = (form:NgForm) => {
    
     // si formulaire invalide affiche la première erreur
     if(form.controls['email'].invalid){
      this.toastProvider.presentToast('L\'adresse email est invalide !!!');
      return;
    }

    if(form.controls['password'].invalid){
      this.toastProvider.presentToast('Le mot de passe doit comporter au moins 6 caractères !!!');
      return; 
    }   

    if(form.controls["passwordCopie"]){

      /****************** Inscription ***************/
      if(form.controls['username'].invalid){
        this.toastProvider.presentToast('Le pseudo doit comporter au moins 3 caractères !!!');
        return;
      }   

      if(form.controls['password'].value != form.controls['passwordCopie'].value ){
        this.toastProvider.presentToast('Les mots de passe doivent être identiques !!!');
        return;
      }

      this.userProvider.register(form.controls['email'].value, form.controls['password'].value, form.controls['username'].value)
     .subscribe((data:any) => {
       if(data.success){
          
           // stocke les identifiants        
     this.storage.set('user_id', data.result.userId);
     this.storage.set('user_username', form.controls['username'].value);
     this.storage.set('user_email', form.controls['email'].value);  
     this.toastProvider.presentToast('Inscription validée');   

       }else{
        this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
      this.toastProvider.presentToast('Inscription impossible :'+ err);
      console.log(err)
     });
      
     
    }else{

      /***************** Connexion ****************/
      this.userProvider.login(form.controls['email'].value, form.controls['password'].value)
      .subscribe((data:any) => {
        if(data.success){
           
            // stocke les identifiants        
      this.storage.set('user_id', data.result.userId);
      this.storage.set('user_username', form.controls['username'].value);
      this.storage.set('user_email', form.controls['email'].value);  
      this.toastProvider.presentToast('Vous êtes connecté');   
 
        }else{
         this.toastProvider.presentToast(data.message);
        }
       
      }, (err: any) => {
       this.toastProvider.presentToast('Connexion impossible :'+ err);
       console.log(err)
      });
    }


   
  }
}
