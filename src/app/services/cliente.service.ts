import { Inject, Injectable } from '@angular/core';
import {type Observable} from 'rxjs';
import { Cliente } from 'src/types/cliente.interface';
import { clienteUrl } from '../helpers/urls';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
		return this.http.get<Cliente[]>(clienteUrl.getAll());
	}
  
  delete(id: number): Observable<void> {
		return this.http.delete<void>(clienteUrl.getById(id));
	}

  update(cliente: Cliente): Observable<Cliente> {
		return this.http.put<Cliente>(clienteUrl.update(cliente.id), {cliente});
	}
}
