import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase from 'firebase';
/**
 * Generated class for the EnfantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enfant',
  templateUrl: 'enfant.html',
})
export class EnfantPage {

  user_auth_id: string;
  user_id: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastProvider : ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnfantPage');
    this.user_id = this.navParams.get('id');
    this.user_auth_id = firebase.auth().currentUser.uid;
    console.log(this.user_id);
    console.log(this.user_auth_id);
        
  }

  onValidationEnfant( prenom, surnom, sexe, temps){

    if(prenom.value===""){
      this.toastProvider.presentToast('Le prénom doit être renseigné !!!');     
      return;
    }
    

    // CREATION 'enregistrement' USER
    firebase.database().ref('user/' + this.user_id + '/child').push({
      child_prenom: prenom.value,
      child_surnom: prenom.value,
      child_sexe: prenom.value,      
      child_temps: prenom.value      
      
    });

  }

}
