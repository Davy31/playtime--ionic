import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { FamillePage }  from '../../pages/famille/famille';
import { DashboardProvider} from '../../providers/api-base/dashboard';
import { ToastProvider }  from '../../providers/toast/toast';
import { DashboardPage }  from '../../pages/dashboard/dashboard';
import { ChildProvider} from '../../providers/api-base/child';

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
  childDetail : any;
  childId:number
  winTime:number;
  playTime:number;
  remainingTime:number;
  winTimeDisplay : string;
  playTimeDisplay : string;
  remainingTimeDisplay : string;
  isRunning = false;
  temps: any;
  tempsVibration: any;
  afficheTemps : any;
  name:string

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dashboardProvider: DashboardProvider,
              private childProvider: ChildProvider,
              private vibration: Vibration,
              public toastProvider : ToastProvider ) {
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
     
  }

  // arrete le chrono si on quitte la page sans l'arreter, on enregistre pas le temps joué
  ionViewDidLeave(){
    this.onStopChrono (false);
  }
  
  onStartChrono = () => {

    this.isRunning = true;
    this.chrono = setInterval( () => {

                              this.remainingTime--;
                              console.log(this.playTime);                             
                              this.playTime++;
                              this.playTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.playTime);                              
                              this.remainingTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.remainingTime);
                              if(this.remainingTime==0){
                                this.onStopChrono(true);
                              }
                            },1000);
  }
  getDetailChild(){

    this.childDetail= this.childProvider.getDetailChild(this.childId)
      .subscribe((data:any) => {
        if(data.success){ 
          this.childDetail = data.result;
          console.log(this.childDetail);
          this.name = this.childProvider.getName( this.childDetail);
          this.playTime = this.childDetail["0"].playTime*60;
          this.winTime = this.childDetail["0"].winTime*60;
          
          this.remainingTime = this.winTime - this.playTime ;

          console.log("winTime=" + this.winTime + " playTime=" + this.playTime + " remainingTime=" + this.remainingTime)
          this.playTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.playTime);
          this.remainingTimeDisplay = this.dashboardProvider.convertSecondeHeure(this.remainingTime);

         //********* Controle qu'il reste du temps */
          console.log("temps restant:" + this.remainingTime);
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
