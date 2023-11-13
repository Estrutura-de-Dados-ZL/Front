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
}
