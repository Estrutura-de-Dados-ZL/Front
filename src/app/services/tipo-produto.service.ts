import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {type Observable} from 'rxjs';

import {tipoProdutoUrl} from '../helpers/urls';
import {type TipoProduto} from 'src/types/tipoProduto.interface';

@Injectable({
	providedIn: 'root',
})
export class TipoProdutoService {
	constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	getAll(): Observable<TipoProduto[]> {
		return this.http.get<TipoProduto[]>(tipoProdutoUrl.getAll());
	}

	getById(id: number): Observable<TipoProduto> {
		return this.http.get<TipoProduto>(tipoProdutoUrl.getById(id));
	}

	getByDescricao(descricao: string): Observable<TipoProduto[]> {
		return this.http.get<TipoProduto[]>(tipoProdutoUrl.getByDescricao(descricao));
	}

	update(tipoProduto: TipoProduto): Observable<TipoProduto> {
		return this.http.put<TipoProduto>(tipoProdutoUrl.update(tipoProduto.id), {tipoProduto});
	}

	create(tipoProduto: TipoProduto): Observable<TipoProduto> {
		return this.http.post<TipoProduto>(tipoProdutoUrl.save(), {tipoProduto});
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(tipoProdutoUrl.getById(id));
	}
}
