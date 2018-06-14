import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FamillePage} from '../famille/famille';
import { RegisterPage} from '../register/register';
import { ConnexionPage } from '../connexion/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

    isAuth: boolean;
    userAuthId: string;
    stateConnexion: string;
    
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {   }


  onLienFamille(){
    this.navCtrl.setRoot( FamillePage );
  }
  
  onLienConnexion(){
    this.navCtrl.setRoot( ConnexionPage );
  }

  onLienInscription(){
    this.navCtrl.setRoot( RegisterPage );
  }
}
