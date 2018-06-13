import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { updateDate } from 'ionic-angular/util/datetime-util';


@Injectable()
export class UserProvider {

  public userPseudo:string;  
  
  constructor(public http: HttpClient) {}
  


  register = (email:string,password:string,username:string) => {
    
    let postData = new FormData();
      postData.append('email' , email);
      postData.append('password' , password);
      postData.append('username' , username);
    const uri_api = 'http://localhost/playtime/user/user_add.php';
    let tab_retour =  this.http.post(uri_api,postData);
  
    return tab_retour;
  }


  login = (email:string,password:string) =>{
    let postData = new FormData();
      postData.append('email' , email);
      postData.append('password' , password);
    const uri_api = 'http://localhost/playtime/user/user_connexion.php';
    let tab_retour =  this.http.post(uri_api,postData);

  return tab_retour;
  }


}

