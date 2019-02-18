import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {

  private _usersUrl = "https://jsonplaceholder.typicode.com/users";
  private _catalogsUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._usersUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._catalogsUrl)
  }
}
