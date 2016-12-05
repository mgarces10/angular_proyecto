import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Injectable()
export class HttpService {
    private baseURL: string = 'https://jsonplaceholder.typicode.com/';
    private usuariosURL: string = ''

  constructor(private http: Http) { 

  }
  obtenerUsuarios() {
      return this.http.get(this.baseURL + 'users').map((res:Response) => res.json());
  }

}


