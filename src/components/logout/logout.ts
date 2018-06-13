import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../../pages/login/login';

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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage
          ) {}

    ngOnInit() {
      this.storage.clear();
      this.navCtrl.setRoot("LoginPage");
    }

  onSigneOut(){
    
  }
}

