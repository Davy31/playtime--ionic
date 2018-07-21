import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastProvider }  from '../../providers/toast/toast';
import { ConnexionPage }  from '../../pages/connexion/connexion';


/*
 ******* Regarde si l'ID de l'utilisateur est stocké dans le téléphone, sinon renvoi  à la page de connexion *****
*/
@Injectable()
export class AuthentProvider {

  isAuth: boolean;
  user_id: number;
  user_username: string;

  constructor(public http: HttpClient, 
              private toastProvider: ToastProvider,
              private storage: Storage,
              ) {  }

    authentication(){
      this.storage.get('playtime_user_id').then((val) =>{
      
      if ((val == null)){
        this.toastProvider.presentToast("Vous n'êtes pas connecté");
        //this.navCtrl.setRoot( ConnexionPage );
        console.log("nul");
        return false;
        
      }else{
        this.user_id = val;
        this.isAuth=true;
        console.log("id= " + this.user_id);
        return true;
      }
    }).catch((err) =>{
      this.toastProvider.presentToast("Vous n'êtes pas connecté");
     //this.navCtrl.setRoot( ConnexionPage);
     console.log("erreur");
        return false
    })
/*
    this.storage.get('playtime_user_username').then((val) =>{
      this.user_username= val
    
    }).catch((err) =>{
      this.toastProvider.presentToast("Vous n'êtes pas connecté");
     // this.navCtrl.setRoot( ConnexionPage);
    })
  */
  }




}
