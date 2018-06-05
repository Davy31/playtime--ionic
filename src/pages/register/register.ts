import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import { HomePage } from '../home/home';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  api_result:any;
  email='ppp@aezez.';
  password='123456';
  pseudo = "Toto";

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private toastProvider: ToastProvider,
               private afAuth: AngularFireAuth,
               private userProvider: UserProvider
               ) {}


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

    if(form.controls['password'].value != form.controls['passwordCopie'].value ){
      this.toastProvider.presentToast('Les mots de passe doivent être identiques !!!');
      return;
    }

    if(form.controls['pseudo'].invalid){
      this.toastProvider.presentToast('Le pseudo doit comporter au moins 3 caractères !!!');
      return;
    }      
    
    //************************** Tentative inscription firebase
      this.afAuth.auth.createUserWithEmailAndPassword(form.controls['email'].value,form.controls['password'].value)
      
      .then((data)=>{
      //************************** inscription validée ******************************************
      const user_id = data.user.uid;
      
      // *********création  l'utilisateur sur la base de données mySql via l'api**************
      this.api_result = this.userProvider.addUser(user_id,form.controls['pseudo'].value);
    
      if(this.api_result[0].sucess){ 
           
        this.toastProvider.presentToast("Utilsateur crée");
          //----------- Retour Home            
          this.navCtrl.setRoot( HomePage);
        
        }else{
          this.toastProvider.presentToast("Création utilisateur impossible");
        }
    })
    //************************** inscription refusée
     .catch((erreur) => {  
      this.toastProvider.presentToast(this.toastProvider.get_messagesErreurs(erreur.code));     
     });
    
  }

}
