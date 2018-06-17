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

  messageToast:string;
  

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private toastProvider: ToastProvider,
               private userProvider: UserProvider,
               private  storage: Storage
               ) {}


  
  ionViewDidLoad() {
    console.clear();
    this.storage.get('playtime_user_id')
    .then((val) =>{    
      console.log('id =' +  val);
      })
    .catch((err) =>{
      this.toastProvider.presentToast("Vous n'êtes pas connecté");
    // this.navCtrl.setRoot( ConnexionPage);
     })
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
         /******************** Inscription validée*********** */          
           // stocke les identifiants        
            this.storage.set('playtime_user_id', data.result.userId);
            this.storage.set('playtime_user_username', form.controls['username'].value);
            this.storage.set('playtime_user_email', form.controls['email'].value);  
            this.toastProvider.presentToast('Inscription validée');  
            
            this.navCtrl.setRoot(FamillePage);

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
        console.log(data);
        if(data.success){
          console.log(data.result[0].id + ' ' + data.result[0].username)
            // stocke les identifiants         
          this.storage.set('playtime_user_id', data.result[0].id );
          this.storage.set('playtime_user_username', data.result[0].username);
          this.storage.set('playtime_user_email', form.controls['email'].value);  
          this.toastProvider.presentToast('Vous êtes connecté');

          this.navCtrl.setRoot(FamillePage);
 
        }else{
          console.log("pas succes");
         this.toastProvider.presentToast(data.message);
        }
       
      }, (err: any) => {
       this.toastProvider.presentToast('Connexion impossible :'+ err);
       console.log(err)
      });
    }


   
  }
}
