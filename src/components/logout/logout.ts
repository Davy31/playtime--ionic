import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ConnexionPage } from '../../pages/connexion/connexion';


/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  text: string;
  isAuth :boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public alertCtrl: AlertController
          ) {}

    
  onSigneOut(){
    
    const confirm = this.alertCtrl.create({
      title: 'Voulez-vous vraiment vous déconnecter ?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Annuler');
          }
        },
        {
          text: 'OUI',
          handler: () => {
            // vide les varirables locales et renvoi à la page de connexion
            this.storage.remove('playtime_user_id');
            this.storage.remove('playtime_user_username');
            this.storage.remove('playtime_user_email');
            this.isAuth = false;
            this.navCtrl.setRoot(ConnexionPage);

          }
        }
      ]
    });
    confirm.present();
  }
  
}

