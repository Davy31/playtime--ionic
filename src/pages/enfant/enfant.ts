import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastProvider }  from '../../providers/toast/toast';
import { NgForm } from '@angular/forms';
import { ChildProvider} from '../../providers/api-base/child';
import { FamillePage } from '../famille/famille';
import { AlertController } from 'ionic-angular';


/** ***************Formulaire enfant *************   **/

@Component({
  selector: 'page-enfant',
  templateUrl: 'enfant.html',
})
export class EnfantPage {

  
  user_id: number;
  child_id:number;  
  firstname:string; 
  nickname:string;
  sexe:string ;
  childDetail: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastProvider : ToastProvider,
    private childProvider: ChildProvider,
    public alertCtrl: AlertController
  ) {}


  ionViewDidLoad() {
    console.clear();
    console.log('ionViewDidLoad EnfantPage');
    console.log(this.navParams.get('childId'));
    console.log(this.navParams.get('userId'));

    /** ********** initialise le formulaire  *******/
    this.child_id = this.navParams.get('childId');
    this.user_id = this.navParams.get('userId');

    if(this.child_id===0){
      /******************** Ajout enfant ************************* */
      this.sexe = 'M';
    }else{
      /******************** Modif enfant ************************* */
      this.childDetail= this.childProvider.getDetailChild(this.child_id)
      .subscribe((data:any) => {
        if(data.success){ 
          this.childDetail = data.result[0];
          this.firstname =this.childDetail.firstname;
          this.nickname =this.childDetail.nickname;
          this.sexe =this.childDetail.gender;
   
       }else{  
         console.log(data)
        this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
      this.toastProvider.presentToast('Inscription impossible :'+ err);
      console.log(err)
     }); 
   }
  
  }

  /******************************** Soummission Formulaire *********************************** */
  onSubmit = (form:NgForm) => {    
    
    // Teste le prénom
    if(form.controls['firstname'].invalid){
      this.toastProvider.presentToast('Le prénom doit comporté au moins 3 caractères !!!');
      return;
    }

    if(this.child_id===0){
     
      /******************** Ajout enfant ************************* */
      this.childDetail= this.childProvider.addChild(this.user_id, form.controls['firstname'].value, form.controls['nickname'].value, form.controls['sexe'].value)
      .subscribe((data:any) => {
        if(data.success){          
          this.toastProvider.presentToast('Enfant ajouté');
          this.navCtrl.setRoot(FamillePage);
       }else{  
         console.log(data);
        this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
      this.toastProvider.presentToast('ajout de l\'enfant impossible :'+ err);
     }); 
      
    }else{
      /******************** Modif enfant ************************* */
      this.childDetail= this.childProvider.updateChild(this.child_id, form.controls['firstname'].value, form.controls['nickname'].value, form.controls['sexe'].value)
      .subscribe((data:any) => {
        if(data.success){          
          this.toastProvider.presentToast('Enfant modifié');
          this.navCtrl.setRoot(FamillePage);
       }else{  
         console.log(data);
        this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
      this.toastProvider.presentToast('Modification de l\'enfant impossible :'+ err);
     }); 
    }

  }

  onChildDelete = () => { 
     const confirm = this.alertCtrl.create({
    title: 'Voulez-vous vraiment vous vraiment enlever  ' + this.firstname + ' de l\'application ?',
    buttons: [
      {
        text: 'Annuler',
        handler: () => {
          console.log('Annuler');
        }
      },
      {
        text: 'OUI',
        handler: () => {      
           /******************** Modif enfant ************************* */
      this.childDetail= this.childProvider.deleteChild(this.child_id)
      .subscribe((data:any) => {
        if(data.success){          
          this.toastProvider.presentToast('Enfant enlevé de l\'application');
          this.navCtrl.setRoot(FamillePage);
       }else{  
         console.log(data);
        this.toastProvider.presentToast(data.message);
       }
      
     }, (err: any) => {
      this.toastProvider.presentToast('Suppression de l\'enfant impossible :'+ err);
     });    
          
        }
      }
    ]
  });
  confirm.present();
}
  onLinkCancel = () => {
  this.navCtrl.setRoot(FamillePage);
   }


}

