import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class DashboardProvider {
  
  constructor(public http: HttpClient) {}
  
  getListActionByChild = (child_id: number) => {   
    const uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_action_child.php?id=' + child_id;
    let tab_retour =  this.http.get(uri_action_list);
    console.log(' provider -liste action par enfant  : '+ uri_action_list);
    
    return tab_retour;
  }

  getListActionsNoSelected = (child_id: number) => {   
    const uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_actions_child_noSelected.php?id=' + child_id;
    let tab_retour =  this.http.get(uri_action_list);
    console.log(' provider -actions non sélectionnées : '+ uri_action_list);
    //console.log(tab_retour);
    return tab_retour;  
  }

  affectActionChild = (child_id,actions:any) => {   
    
    console.log("provider Affecte");
    let i =0;
    let postData = new FormData();
      postData.append('childId' , child_id);
      actions.forEach(element => {
        i++;
        postData.append('action_' + i , element);
        postData.append('nb_action' ,  i.toString() );
      });
    const uri_api = 'https://davy3165.000webhostapp.com/dashboard/dashboard_affect.php';
    let tab_retour =  this.http.post(uri_api,postData);
    
    console.log(uri_api);
    console.log("i=" + i);
    console.log(tab_retour);
    return tab_retour;
  
  }

  deleteAffectation = (action_id:number) => {
    const uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_desaffecte.php?id=' + action_id;
    let tab_retour =  this.http.get(uri_action_list);
    console.log('provider - désaffectation : '+ uri_action_list);
    return tab_retour;
  }

  changeNbRealisedAction = (action: string, action_id: number, childId: number) =>{
    const uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_change_nbRealised.php?action=' + action + '&id=' + action_id + '&childId='+ childId;
    let tab_retour =  this.http.get(uri_action_list);
    console.log('provider - ' + action + ' action : '+ uri_action_list);
    return tab_retour;
  }


  resetTimeAction = (child_id: number) => {
    const uri_action_list = 'https://davy3165.000webhostapp.com/dashboard/dashboard_reset.php?id=' + child_id;
    let tab_retour =  this.http.get(uri_action_list);
    console.log(' provider -reset : '+ uri_action_list);
    console.log(tab_retour);
    return tab_retour;
  }
  

 convertMinuteHeure(minute: number){ 
    let signe="";
    let heure:any;
    let min:any;

    if(minute<0){
        minute = - minute;
        console.log (minute);
        signe="-";
    }
    let mm= minute % 60;
    let h = (minute - mm) / 60;

    if(h<10){
      heure= "0" + h;
    }else{
      heure = h;
    }

    if(mm<10){
      min= "0" + mm;
    }else{
      min = mm;
    }
    return (signe + heure + "H" + min);
  }

  convertSecondeHeure(seconde: number) {
    var addZero = function(v) { return v<10 ? '0' + v : v; };
    var d = new Date(seconde * 1000); /** js fonctionne en milisecondes **/
    var t = [];
    t.push(addZero(d.getHours()-1));
    t.push(addZero(d.getMinutes()));
    t.push(addZero(d.getSeconds()));
    return t.join(':');
  }


}

