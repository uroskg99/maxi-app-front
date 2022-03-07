import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }

  adminsUrl: string = "http://localhost:8000/api/auth/";

  // registerAdmin(data: any) {
  //   return this.http.post(this.adminsUrl + 'register/', data);
  // }

  loginAdmin(data: any) {
    return this.http.post(this.adminsUrl + 'login/', data);
  }
}
