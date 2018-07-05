import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ActionProvider {

  constructor(public http: HttpClient, ) {}
  
  getListActionsNoSelected = () => {   

    const uri_action_list = 'https://davy3165.000webhostapp.com/action/action_list.php';
    let tab_retour =  this.http.get(uri_action_list);
    console.log(' provider -liste action : '+ uri_action_list);
    console.log(tab_retour);
    return tab_retour;
  }

  

    
  


}

