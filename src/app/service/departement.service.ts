import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private httpclient: HttpClient) { }

  getData(){
    return this.httpclient.get('http://localhost:8000/api/departements/');
  }
}
