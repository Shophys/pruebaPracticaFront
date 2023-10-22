import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteUrl: string;

  constructor(private http: HttpClient) {
    this.clienteUrl = 'http://localhost:8080/cliente';
  }

  public findAll(tipoDocumento:string, numeroDocumento:number): Observable<Cliente> {
    return this.http.get<Cliente>(this.clienteUrl+"?tipoDocumento="+tipoDocumento+"&numeroDocumento="+numeroDocumento);

  }
}
