import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {type Observable} from 'rxjs';

import {produtoUrl} from '../helpers/urls';
import {type Produto} from 'src/types/produto.interface';

@Injectable({
	providedIn: 'root',
})
export class ProdutoService {
	constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	getAll(): Observable<Produto[]> {
		return this.http.get<Produto[]>(produtoUrl.getAll());
	}

	getByNomeTipo(id: number, nome: string): Observable<Produto[]> {
		return this.http.get<Produto[]>(produtoUrl.getByNomeTipo(id, nome));
	}

	update(produto: Produto): Observable<Produto> {
		return this.http.put<Produto>(produtoUrl.update(produto.id), {produto});
	}

	create(produto: Produto, tipoProdutoId: number): Observable<Produto> {
		return this.http.post<Produto>(produtoUrl.save(tipoProdutoId), {produto});
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(produtoUrl.getById(id));
	}
}
