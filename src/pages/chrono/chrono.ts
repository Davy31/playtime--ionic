import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
  temps = moment({hour: 5, minute: 10, seconds: 20}); 
  afficheTemps = this.temps.format("hh:mm:ss");

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tts: TextToSpeech  ) {
  }
  chrono:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChronoPage');
   
  }

  onStartChrono = () => {
    this.tts.speak({text: 'Il vous reste 5 minutes', locale: 'fr-FR'})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

    this.isRunning = true;
    this.chrono = setInterval( () => {
                                this.temps.subtract(1,'s');
                                this.afficheTemps = this.temps.format("hh:mm:ss");
                                },1000);
  }

  onStopChrono = () => {
    clearInterval(this.chrono);
    this.isRunning = false;

  }

  
}
