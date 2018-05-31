import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,
              public   afAuth: AngularFireAuth) {

  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user.displayName);
       
      } else {
        console.log('Déconnecté');
       
      }
    });
  }
  
}
