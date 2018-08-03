import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { FamillePage }  from '../../pages/famille/famille';
import { DashboardProvider} from '../../providers/api-base/dashboard';
import { ToastProvider }  from '../../providers/toast/toast';
import { DashboardPage }  from '../../pages/dashboard/dashboard';
import { ChildProvider} from '../../providers/api-base/child';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-chrono',
  templateUrl: 'chrono.html',
})
export class ChronoPage {
  childDetail : any;
  childId:number
  winTime:number;
  playTime:number;
  remainingTime:number;
  playTimeDisplay : string;
  remainingTimeDisplay : string;
  isRunning = false;
  name:string;
  //Gestion couleur chrono
  isColorRed  = false;
  isColorOrange  = false;
  isColorGreen  = true;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dashboardProvider: DashboardProvider,
              private childProvider: ChildProvider,
              private vibration: Vibration,
              public toastProvider : ToastProvider,
              private nativeAudio: NativeAudio
  ) {
  }
  chrono:any;

  ionViewDidLoad = () => {
    //******** Controle le paramtre childId */
    console.clear();
    console.log('ionViewDidLoad ChronoPage');
    if(this.navParams.get('id')){
      this.childId = this.navParams.get('id');
      console.log("childId=" + this.childId);
    }else{
      console.log("il manque le parametre id enfant");
      this.navCtrl.setRoot(FamillePage);
    }

    this.getDetailChild();

    /*
      // initialise la sonnerie
      this.nativeAudio.preloadSimple('uniqueId1', 'audio/sound_end_play.mp3').then(() => {
        console.log("initialisation sonnerie réussie");
      })
        ,( (err) => {
        console.log("Erreur intitialisation sonnerie : " + err.messageerror);
      });

  */
  }

  // arrete le chrono si on quitte la page sans l'arreter, on enregistre pas le temps joué
  ionViewDidLeave(){
    this.onStopChrono (false);
  }

  onStartChrono = () => {

    this.isRunning = true;
    this.chrono = setInterval( () => {

      this.remainingTime--;
      this.playTime++;
      this.playTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.playTime);
      this.remainingTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.remainingTime);

      // s'il ne reste plus que 5 minutes : Vibrations  courtes et couleur orange
      if(this.remainingTime==300) {
        this.vibration.vibrate([2000, 1000, 2000]);
      }
      //Gere couleur du chrono
      if(this.remainingTime<300){//s'il  reste moins de 5 minutes :couleur orange
        this.isColorGreen = false;
        this.isColorOrange = true;
        this.isColorRed = false;
      }else{ // Sinon couleur verte
        this.isColorGreen = true;
        this.isColorOrange = false;
        this.isColorRed = false;
      }
      // Fin du temps : longue vibration  + arret du chrono + couleur rouge

      if(this.remainingTime==0){
        this.isColorGreen = false;
        this.isColorOrange = false;
        this.isColorRed = true;

        this.onStopChrono(true);

        this.vibration.vibrate([20000, 5000, 20000]);

      }
    },1000);
  }

  // Recupère infos de l'enfant
  getDetailChild(){

    this.childDetail= this.childProvider.getDetailChild(this.childId)
      .subscribe((data:any) => {
        if(data.success){
          this.childDetail = data.result;
          this.name = this.childProvider.getName( this.childDetail);
          this.playTime = this.childDetail["0"].playTime*60;
          this.winTime = this.childDetail["0"].winTime*60;

          this.remainingTime = this.winTime - this.playTime ;

          this.playTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.playTime);
          this.remainingTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.remainingTime);

          //********* Controle qu'il reste du temps */
          if(this.remainingTime<=0){
            this.toastProvider.presentToast("Il ne reste plus de temps!!!");
            this.navCtrl.setRoot(DashboardPage, {id: this.childId});
          }
        }else{
          console.log(data)
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {

        console.log(err)
      });
  }

  //arrete le chrono et enregistre le temps joué si record est vrai
  onStopChrono = (record:boolean) => {
    clearInterval(this.chrono);
    console.log("Enregistre temps");
    //Convertie en minutes par defaut
    let playTimeSeconde = Math.trunc(this.playTime/60);
    console.log("Minutes enregistrées :" + playTimeSeconde);
    this.childProvider.recordPlaytime(this.childId,playTimeSeconde)
      .subscribe((data:any) => {
        if(data.success){
          console.log(data);
        }else{
          console.log(data);
        }

      }, (err: any) => {

        console.log(err);
      });

















    this.isRunning = false;

  }

  onLinkFamily = () => {
    this.navCtrl.setRoot(FamillePage) ;
  }

  onLinkDashboard = () => {
    this.navCtrl.setRoot(DashboardPage,{id:this.childId}) ;
  }


}
