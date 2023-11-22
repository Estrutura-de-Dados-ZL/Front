import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {type Observable} from 'rxjs';

import {clienteUrl} from '../helpers/urls';
import {type Cliente} from 'src/types/cliente.interface';

@Injectable({
    providedIn: 'root',
})
export class ClienteService {
    constructor (@Inject(HttpClient) private readonly http: HttpClient) { }

    getAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(clienteUrl.getAll());
    }
    getById(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(clienteUrl.getById(id));
    }
    getByNome(nome: string): Observable<Cliente> {
        return this.http.get<Cliente>(clienteUrl.getByNome(nome));
    }
    update(cliente: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(clienteUrl.update(cliente.id), {cliente});
    }
    create(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(clienteUrl.save(), {cliente});
    }
    delete(id: number): Observable<void> {
        return this.http.delete<void>(clienteUrl.getById(id));
    }
}