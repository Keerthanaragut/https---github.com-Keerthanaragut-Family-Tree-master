import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

   private registerApi = "http://localhost:8080/register";
   private loginApi = "http://localhost:8080/login";
  private getrelationsApi = "http://localhost:8080/get/relations/";
   private uploadApiurl = "http://localhost:8080/add/members";
   private getmembersApi = "http://localhost:8080/get/members";

   constructor(private http: HttpClient) { }


   addRegisterAPI(data: any){
    return this.http.post(this.registerApi,data);
   }

   loginapi(data: any){
    let httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
      }),
      responseType : 'text' as 'text'
      
  };
      return this.http.post(this.loginApi,data,httpOptions);
     }

     relationsApi(id: any){
       let params = new HttpParams().set('id',id)
      return this.http.get<any>(this.getrelationsApi,{params});
     }
     
     uploadAPI(data: any){
      let httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
        }),
        responseType : 'text' as 'text'
        
    };
       console.log(data,'inside uploadapi')
      return this.http.post(this.uploadApiurl,JSON.stringify(data),httpOptions);
      
     }
     getmembersAPI(userId: any){
      let params = new HttpParams().set('userId',userId)
     return this.http.get<any>(this.getmembersApi,{params});
    }

}
