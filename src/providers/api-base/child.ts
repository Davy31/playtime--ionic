import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable} from  'rxjs/observable'


@Injectable()

export class ChildProvider {

  public userPseudo:string;  
  
  constructor(public http: HttpClient, private afAuth: AngularFireAuth) {}
  
  addChild = (user_auth_id: string, child_firstname: string, child_nickname: string, child_sexe) =>{ 
   /*
      const api_key = 25;
      const uri_movie = 'https://api.themoviedb.org/3/movie/'+ user_id +'?api_key=' + api_key;
        return this.http.get(uri_movie);
      */

      //const tab_retour = [{sucess: true}];
      const tab_retour = [{sucess: true}];
      
      //delete user sur fire base
      //this.afAuth.auth.currentUser.delete;

      return tab_retour;

  }

  getListChildByUser = (user_auth_id: string) => {
/*
    const uri_child = 'http://localhost/playtime/child.php?id=1';
    let childs =  this.http.get(uri_child)
    .map( (resultat) => {
      return resultat;
    })
    .catch(this.handleError)
  }
    */
    let childs=[
        {id: 1,firstname: "Pierre" ,nickname: null, sexe: 1},
        {id: 2,firstname: "Cèline" ,nickname: "Line", sexe: 0}
    ];
    
    return  childs;
  }

    getDetailChild = (child_id: number) =>{
      let child:any
      if(child_id === 1){
        child = {id: 1,firstname: "Pierre" ,nickname: null, sexe: 1};
      }else{
        child =  {id: 2,firstname: "Cèline" ,nickname: "Line", sexe: 0};
      }
      
      return child;
   
    }
  
  }



