import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { updateDate } from 'ionic-angular/util/datetime-util';


@Injectable()

export class DashboardProvider {

   
  
  constructor(public http: HttpClient) {}
  
  
  getListActionByChild = (child_id:number) => {

    let dashs =[
        { idChild: 1, idAction: 1, time: 10, count:2, countMax:10, labelAction:"Mettre la table", positive: true},
        { idChild: 1, idAction: 2, time: 10, count:2, countMax:6, labelAction:"Faire mes devoirs sans raler", positive: true},
        { idChild: 1, idAction: 3, time: 20, count:2, countMax:7, labelAction:"Etre puni(e) à l'ecole", positive: false},
        
    ];
    return  dashs;
  }

    
  


}

