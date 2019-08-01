import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    findAll: any;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getAll() {  // correlates with what will be passed into the home/hom.component.ts
    return this._http.get('/findAll'); // correlates with the routes established in the server.js
  }

  chatFindOne(friend) {
      console.log(friend);
      return this._http.get('/chatFindOne', friend);
  }

  createUser(user) {
    return this._http.post('/create', user);
  }

}
