import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class UserProvider {
  
  constructor(public http: HttpClient, private afAuth: AngularFireAuth) {}
  
  addUser(user_auth_id, user_pseudo){ 
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
}

