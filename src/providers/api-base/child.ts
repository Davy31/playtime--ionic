import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ChildProvider {

  public userPseudo:string;  
  
  constructor(public http: HttpClient) {}
  
  
  addChild = (user_id: any, child_firstname: string, child_nickname: string, child_sexe: string) => {     
      
      console.log(user_id);
      console.log(child_firstname);
      console.log(child_nickname);
      console.log(child_sexe);

    let postData = new FormData();
      postData.append('idUser' , user_id);
      postData.append('firstname' , child_firstname);
      postData.append('nickname' , child_nickname);
      postData.append('gender' , child_sexe);
    const uri_api = 'https://davy3165.000webhostapp.com/child/child_add.php';
    let tab_retour =  this.http.post(uri_api,postData);

    return tab_retour

  }

  updateChild = (child_id: any, child_firstname: string, child_nickname: string, child_sexe: string) => {     
      
    console.log('idChild= ' + child_id);
    console.log('firstname= ' +child_firstname);
    console.log('nickname= ' +child_nickname);
    console.log('sexe= ' +child_sexe);

  let postData = new FormData();
    postData.append('idChild' , child_id);
    postData.append('firstname' , child_firstname);
    postData.append('nickname' , child_nickname);
    postData.append('gender' , child_sexe);
  const uri_api = 'https://davy3165.000webhostapp.com/child/child_update.php';
  let tab_retour =  this.http.post(uri_api,postData);

  return tab_retour

}
  

  getListChildByUser = (user_id: number) => {
    const uri_child = 'https://davy3165.000webhostapp.com/child/child_list.php?id='+ user_id;
    let tab_retour =  this.http.get(uri_child);
    console.log(' provider -liste famille : '+ uri_child);
    console.log(tab_retour)
    return tab_retour;
  }
  
  

  getDetailChild = (child_id: number) => {
    const uri_child = 'https://davy3165.000webhostapp.com/child/child_detail.php?id='+ child_id;  
    let tab_retour =  this.http.get(uri_child);  
    return tab_retour;
  
  }

}



