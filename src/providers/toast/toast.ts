import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()

export class ToastProvider {

    private messageErreur:string;
    private messagesErreurs=[
    {
      code: 'auth/email-already-in-use',
      messageEnglish:'Thrown if there already exists an account with the given email address',
      messageFrench: 'Cette adresse email est déjà utilisé par un autre compte'
    },

    {
      code: 'auth/invalid-email',
      messageEnglish:'Thrown if the email address is not valid',
      messageFrench: 'L\'adresse email est invalide'
    },

    {
      code: 'auth/operation-not-allowed',
      messageEnglish:'Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab',
      messageFrench: 'L\'adresse email ou le mot de passe n\'est pas valide'
    },

    {
      code: 'auth/weak-password',
      messageEnglish:'Thrown if the password is not strong enough',
      messageFrench: 'Le mot de passe doit contenir au moins 6 caractères'
    },

    {
      code: 'auth/user-disabled',
      messageEnglish:'Thrown if the user corresponding to the given email has been disabled',
      messageFrench: 'Cet utilisateur est désactivé'
    },

    
    {
      code: 'auth/user-not-found',
      messageEnglish:'Thrown if there is no user corresponding to the given email.',
      messageFrench: 'L\'adresse email et le mot de passe ne correspondent pas'
    },

    
    {
      code: 'auth/wrong-password',
      messageEnglish:'Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set',
      messageFrench: 'L\'adresse email et le mot de passe ne correspondent pas'
    },
  ];


    // Retourne les messages d'erreurs en français
    get_messagesErreurs(param_message_erreur){
     
     const result = this.messagesErreurs.filter(message => message.code === param_message_erreur);
      
      if(result.length>0){
        this.messageErreur = result[0].messageFrench;
      }else{
        this.messageErreur = "Opération impossible";
      }
      return this.messageErreur;
      
    }


  constructor(private toastCtrl: ToastController
              ) {}

    presentToast(message) {
      
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top',
        dismissOnPageChange : false,
        cssClass : 'presentToast'
      });

      
      /*
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      }); 
      
      */
      toast.present();
    }
  

}
