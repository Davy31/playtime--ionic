import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastProvider }  from '../../providers/toast/toast';
import { UserProvider} from '../../providers/api-base/user';
import { NgForm } from '@angular/forms';
import { ChildProvider} from '../../providers/api-base/child';
import { FamillePage } from '../famille/famille';

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

  isAuth: boolean;
  userAuthId: string;
  stateConnexion: string;
  childId:number;
  api_result: any;
  childSexe:number  = 0;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastProvider : ToastProvider,
     public  afAuth: AngularFireAuth,
    private userProvider: UserProvider,
    private childProvider: ChildProvider
  ) {}


  ionViewDidLoad() {
    console.clear();
    console.log('ionViewDidLoad EnfantPage');
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user) {      
        this.isAuth = true;
        this.userAuthId = this.afAuth.auth.currentUser.uid;
      } else {    
        this.isAuth = false;
        this.userAuthId = "0";
      } 

    this.childId = this.navParams.get('id');
    
    console.log( 'user id: ' + this.userAuthId );
    console.log( 'chil id: ' + this.childId );       
    });     
  }

  onSubmit = (formChild:NgForm) => {

    if(formChild.controls['firstname'].invalid){
      this.toastProvider.presentToast('Le prénom doit être renseigné !!!');
      return;
    }

    /********Ajout de l'enfant sur la base de données mySql via l'api************* */

    this.api_result = this.childProvider.addChild(this.userAuthId,formChild.controls['firstname'].value,formChild.controls['nickname'].value,formChild.controls['sexe'].value);
    
    if(this.api_result[0].sucess){ 
         
      this.toastProvider.presentToast("Fiche enfant créee");
        //----------- Retour Home            
        this.navCtrl.setRoot( FamillePage);
      
      }else{
        this.toastProvider.presentToast("Création enfant impossible");
      }
    
  }

  


}


