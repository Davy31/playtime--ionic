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

  

 

    
  


}

