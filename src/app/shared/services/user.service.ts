import { Injectable } from '@angular/core';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User

  constructor() {
    this.user={
      name:'BAIRON',
      email:'bairon@me.com',
      pass:'123456'
    }
  }



  public onLogin(user:User): boolean{

    if(user.email==this.user.email && user.pass==this.user.pass){

      return true;

    }else{
      return false;
    }


  }

}
