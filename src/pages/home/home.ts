import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FamillePage} from '../famille/famille';
import { RegisterPage} from '../register/register';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

    isAuth: boolean;
    userAuthId: string;
    stateConnexion: string;
    
  constructor(public navCtrl: NavController,
              public   afAuth: AngularFireAuth  ) {

  }

  ionViewDidLoad() {   
    
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user) {      
        this.isAuth = true;
        this.userAuthId = this.afAuth.auth.currentUser.uid;
      } else {
    
        this.isAuth = false;
        this.userAuthId = "0";         
      }  
    });
  }


  onLienFamille(){
    this.navCtrl.setRoot( FamillePage );
  }
  
  onLienConnexion(){
    this.navCtrl.setRoot( LoginPage );
  }

  onLienInscription(){
    this.navCtrl.setRoot( RegisterPage );
  }
}
