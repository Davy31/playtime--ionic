import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  
  constructor(public http: HttpClient) {}

  /** ******* Inscription  *****************/
  register = (email:string,password:string,username:string) => {
    
    let postData = new FormData();
      postData.append('email' , email);
      postData.append('password' , password);
      postData.append('username' , username);
    const uri_api = 'https://davy3165.000webhostapp.com/user/user_add.php';
    let tab_retour =  this.http.post(uri_api,postData);     
    return tab_retour;
  }

  /******** Connexion  ************* */
  login = (email:string,password:string) => {
    console.log("login");
    let postData = new FormData();
      postData.append('email' , email);
      postData.append('password' , password);
    const uri_api = 'https://davy3165.000webhostapp.com/user/user_connexion.php';
    let tab_retour =  this.http.post(uri_api,postData);
  console.log(tab_retour)
    return tab_retour;
  
  }


}

