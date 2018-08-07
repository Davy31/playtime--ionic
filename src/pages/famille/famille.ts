import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnfantPage } from '../../pages/enfant/enfant';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { ToastProvider }  from '../../providers/toast/toast';
import { ConnexionPage }  from '../../pages/connexion/connexion';
import { ChronoPage }  from '../../pages/chrono/chrono';
import { ChildProvider} from '../../providers/api-base/child';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-famille',
  templateUrl: 'famille.html',
})
export class FamillePage {

  isAuth: boolean;
  user_id: number;
  user_username: string;
  childs:any;

  constructor(
    public navCtrl: NavController,
    private toastProvider: ToastProvider,
    private childProvider: ChildProvider,
    private storage: Storage

  ) {}

  ionViewDidLoad() {


    /**** Recupere l'id user stocké dans le téléphone, si absent => page connexion */
    this.storage.get('playtime_user_id').then((val) =>{

      if ((val == null)){
        this.toastProvider.presentToast("Vous n'êtes pas connecté");
        this.navCtrl.setRoot( ConnexionPage );
      }else{
        /******Connecté *******************/
        this.user_id = val;
        this.isAuth=true;
        console.log("id= " + this.user_id);
        this.getListChild(this.user_id);
      }
    }).catch((err) =>{
      this.toastProvider.presentToast("Vous n'êtes pas connecté");
      this.navCtrl.setRoot( ConnexionPage);
    })

    /** ************** récupere l'username    ************** */
    this.storage.get('playtime_user_username').then((val) =>{
      this.user_username= val
    }).catch((err) =>{
      this.toastProvider.presentToast("Vous n'êtes pas connecté");
      this.navCtrl.setRoot( ConnexionPage);
    });

  }


  /**********recupere sur la base la liste des enfants************************************/
  getListChild = (param_user_id:number) =>{

    this.childProvider.getListChildByUser(param_user_id)
      .subscribe((data:any) => {
        if(data.success){
          this.childs = data.result;

          console.log(data.result);
        }else{
          this.toastProvider.presentToast(data.message);
        }

      }, (err: any) => {
        this.toastProvider.presentToast('Pas d\'enfants :'+ err);
        console.log(err)
      });
  }

  /********** Boutons de navigations ******** */


  onLinkChrono = (childId:number) => {
    console.log('childId:' + childId);
    this.navCtrl.push(ChronoPage, {id: childId});
  }

  onLinkDashboardChild = (childId:number) => {
    console.log('Dashboard id:' + childId);
    this.navCtrl.push(DashboardPage, {id: childId});
  }

  onLinkFormChild = (param_childId:number) => {
    this.navCtrl.push(EnfantPage, {userId: this.user_id,childId: param_childId} );
  }



}
