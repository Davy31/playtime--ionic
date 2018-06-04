import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class ToastProvider {

  constructor(private toastCtrl: ToastController
              ) {}

    presentToast(message) {
      console.log(message);
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top',
        cssClass : 'presentToast'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }
  

}
