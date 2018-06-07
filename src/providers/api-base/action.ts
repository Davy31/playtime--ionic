import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()

export class ActionProvider {

   
  
  constructor(public http: HttpClient, private afAuth: AngularFireAuth) {}
  
  

  getListAction = () => {

    let actions=[
        {id: 1,label: "Mettre la table" ,positive: true},
        {id: 2,label: "Faire mes devoirs sans raler" ,positive: true},
        {id: 3,label: "Etre puni(e) à l'ecole" ,positive: false},
        {id: 4,label: "Embeter mon frère/ma soeur" ,positive: false},
        {id: 5,label: "Etre sérieux à l'entrainement" ,positive: true},
        {id: 6,label: "Me préparer tout seul" ,positive: true},
        {id: 7,label: "Faire un caprice" ,positive: false},
        {id: 8,label: "Parler mal" ,positive: false},
        {id: 9,label: "Ranger ma chambre" ,positive: true},
        {id: 10,label: "Manger sans raler" ,positive: true},
        {id: 11,label: "Oublier cahiers ou livres" ,positive: false},
        {id: 12,label: "Bonne note à l'ecole" ,positive: true}
        
    ];
    return  actions;
  }

    
  


}

