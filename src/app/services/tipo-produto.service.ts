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
	
	delete(id: number): Observable<void> {
		return this.http.delete<void>(tipoProdutoUrl.getById(id));
	}
	
	update(tipoProduto: TipoProduto): Observable<TipoProduto> {
		return this.http.put<TipoProduto>(tipoProdutoUrl.update(tipoProduto.id), {tipoProduto});
	}
}
