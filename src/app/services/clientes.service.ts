import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  API_URI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getClientes(){
  	return this.http.get(this.API_URI);
  }

  getClienteById(id: string){
  	return this.http.get('${this.API_URI}/${id}');
  }



}
