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

  deleteData(id:any) {
    return this.httpclient.delete('http://localhost:8000/api/departements/'+id);
  }

  export(data:object) {
    return this.httpclient.get('http://localhost:8000/api/export/', data);
  }

  insertData(inputdata:object){
    return this.httpclient.post('http://localhost:8000/api/departements/',inputdata);
  }


}
