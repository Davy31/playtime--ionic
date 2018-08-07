import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ChildProvider {

  public userPseudo:string;

  constructor(public http: HttpClient) {}

  addChild = (user_id: any, child_firstname: string, child_nickname: string, child_sexe: string) => {

    if(child_nickname === undefined ){
      child_nickname= "";
    }

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

    if(child_nickname === undefined ){
      child_nickname= "";
    }

    let postData = new FormData();
    postData.append('idChild' , child_id);
    postData.append('firstname' , child_firstname);
    postData.append('nickname' , child_nickname);
    postData.append('gender' , child_sexe);
    const uri_api = 'https://davy3165.000webhostapp.com/child/child_update.php';
    let tab_retour =  this.http.post(uri_api,postData);
    return tab_retour

  }

  deleteChild = (child_id: number) => {
    const uri_child = 'https://davy3165.000webhostapp.com/child/child_delete.php?id='+ child_id;
    let tab_retour = this.http.get(uri_child);
    return tab_retour;
  }

  getListChildByUser = (user_id: number) => {
    const uri_child = 'https://davy3165.000webhostapp.com/child/child_list.php?id='+ user_id;
    let tab_retour =  this.http.get(uri_child);
    return tab_retour;
  }


  getDetailChild = (child_id: number) => {
    const uri_child = 'https://davy3165.000webhostapp.com/child/child_detail.php?id='+ child_id;
    let tab_retour =  this.http.get(uri_child);
    return tab_retour;
  }

  recordPlaytime = (child_id:number,playtime:number) => {
    const uri_action = 'https://davy3165.000webhostapp.com/child/child_update_playtime.php?idChild=' + child_id + "&playtime=" + playtime;
    let tab_retour =  this.http.get(uri_action);
    return tab_retour;
  }

  /**Return le surnom si existe sinon le prénom */
  getName = (detailsChild) =>{
    if(detailsChild[0].nickname!==null && detailsChild[0].nickname!=="" ){
      return detailsChild[0].nickname;
    }else{
      return detailsChild[0].firstname;
    }
  }


  /**Retourne le temps en heure */
  convertHour = (minute: number) =>{
    let temps=new Date();
    temps.setTime(minute*1000*60);
    return(temps.getHours()-1)+":"+temps.getMinutes();
  }

}



