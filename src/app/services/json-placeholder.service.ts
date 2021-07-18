import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

constructor( private http: HttpClient ) { }

  getAlbum(): Promise<any> {
    return this.http.get(environment.jsonPlaceholderApi + "/albums").toPromise().then((res) => res);
  }

  getComments(): Promise<any> {
    return this.http.get(environment.jsonPlaceholderApi + "/comments").toPromise().then((res) => res);
  }

  getToDos(): Promise<any> {
    return this.http.get(environment.jsonPlaceholderApi + "/todos").toPromise().then((res) => res);
  }

}
