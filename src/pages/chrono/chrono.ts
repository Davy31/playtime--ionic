import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { FamillePage }  from '../../pages/famille/famille';
import { DashboardPage }  from '../../pages/dashboard/dashboard';

/**
 * Generated class for the ChronoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chrono',
  templateUrl: 'chrono.html',
})
export class ChronoPage {

  isRunning = false;
  temps: any;
  tempsVibration: any;
  afficheTemps : any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tts: TextToSpeech,
              private vibration: Vibration  ) {
  }
  chrono:any;

  ionViewDidLoad = () => {
    console.log('ionViewDidLoad ChronoPage');
    this.temps = moment({hour: 0, minute: 5, seconds: 5}); 
    this.afficheTemps = this.temps.format("HH:mm:ss"); 
    this.tempsVibration =  moment({hour: 0, minute: 5, seconds: 0}); 
  }

  onStartChrono = () => {
    this.tts.speak({text: 'Il te reste 5 minutes', locale: 'fr-FR'})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

    this.isRunning = true;
    this.chrono = setInterval( () => {
                                this.temps.subtract(1,'s');
                                this.afficheTemps = this.temps.format("HH:mm:ss");
                                  if( this.temps.diff(this.tempsVibration,'seconde')===0){
                                    this.vibration.vibrate([2000,1000,2000]);
                                  }
                                },1000);
  }

  onStopChrono = () => {
    clearInterval(this.chrono);
    this.isRunning = false;

  }

  onLinkFamily = () => {
    this.navCtrl.setRoot(FamillePage) ;
  }

  onLinkDashboard = () => {
    this.navCtrl.setRoot(DashboardPage) ;
  }

  
}
