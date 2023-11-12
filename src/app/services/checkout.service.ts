import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {type Observable} from 'rxjs';

import {checkoutUrl} from '../helpers/urls';
import { TipoProduto } from 'src/types/tipoProduto.interface';
import { Stack } from '../helpers/dataStructures/stack';
import { Produto } from 'src/types/produto.interface';
import { Queue } from '../helpers/dataStructures/queue';

@Injectable({
	providedIn: 'root',
})
export class CheckoutService {
	constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	checkout (pilhaProduto: Stack<Produto>): Observable<Queue<Produto>> {
		return this.http.post<Queue<Produto>>(checkoutUrl.checkout(), {pilha: pilhaProduto});
	}
}
