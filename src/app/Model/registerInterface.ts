import { Book } from "./Book";

export interface registerInterface{
    firstname : string,
     lastname : string ,
     phoneno : number,
     emailId : string ,
     password : string
     
 }

 export interface LoginDto {
    email : string ,
    password : string
 }

 export interface changepassword{
    email : string;
    oldPassword : string;
    newPassword : string;
 }

