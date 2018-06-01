import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnfantPage } from '../../pages/enfant/enfant';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase from 'firebase';
/**
 * Generated class for the FamillePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-famille',
  templateUrl: 'famille.html',
})
export class FamillePage {

  user_id:string ;
  text_user_name = 'pseudo';
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              private db: AngularFireDatabase) {
  }


  ionViewDidLoad() {
    if(firebase.auth().currentUser) {
      
      const user_auth_id = firebase.auth().currentUser.uid;
      firebase.database().ref('user').orderByChild('user_id').equalTo(user_auth_id).once('value').then((snap) => {
        const user = snap.val()[Object.keys(snap.val())[0]];
        console.log(snap);
        this.text_user_name = user.user_name;
        this.user_id = user.user_id;
      });

    } else {
      console.log('Non connecté');
    }
  }

  
  onLienFormEnfant(){
    this.navCtrl.push(EnfantPage, {id: this.user_id});
  }

}
