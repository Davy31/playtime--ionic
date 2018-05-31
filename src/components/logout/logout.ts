import { Component } from '@angular/core';
import { ToastProvider }  from '../../providers/toast/toast';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
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
  isAuth = false;
  constructor(private toastProvider: ToastProvider,
               private afAuth: AngularFireAuth) {}

    ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
        this.isAuth =true;
      } else {
        console.log('Déconnecté');
        this.isAuth =false;
      }
    });
  }

  onSigneOut(){
    this.afAuth.auth.signOut()
    .then((date) => {
      this.toastProvider.presentToast("Au revoir!!!");

    })
    .catch((error) => {
      this.toastProvider.presentToast("Vous ne pouvez pas nous quitter!!!");
    });
  }
}

