import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:8000/api/login';
  constructor(private http: HttpClient) { }
  login(email, password) {
    const obj = {
      email: email,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('login Done',res));
  }
}
