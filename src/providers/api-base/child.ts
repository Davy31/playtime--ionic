import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ChildProvider {

  public userPseudo:string;  
  
  constructor(public http: HttpClient) {}
  
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
        {id: 1,firstname: "Pierre Henri Michel" ,nickname: null, sexe: 1,playtime: '01h10'},
        {id: 2,firstname: "Cèline" ,nickname: "Line", sexe: 0,playtime: '00h40'}
    ];
    
    return  childs;
  }

    getDetailChild = (child_id: number) =>{
      let child:any
      if(child_id === 1){
        child = {id: 1,firstname: "Pierre" ,nickname: null, sexe: 1,playtime: '01h10' };
      }else{
        child =  {id: 2,firstname: "Cèline" ,nickname: "Line", sexe: 0,playtime: '00h40'};
      }
      
      return child;
   
    }
  
  }



