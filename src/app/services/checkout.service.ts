import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {type Observable} from 'rxjs';

import {checkoutUrl} from '../helpers/urls';
import {type Stack} from '../helpers/dataStructures/stack';
import {type Produto} from 'src/types/produto.interface';
import {type Queue} from '../helpers/dataStructures/queue';
import { Cliente } from 'src/types/cliente.interface';

@Injectable({
	providedIn: 'root',
})
export class CheckoutService {
	constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	checkout(pilhaProduto: Stack<Produto>, cliente: Cliente): Observable<Queue<Produto>> {
		const pilhaString = JSON.stringify(pilhaProduto);
		return this.http.post<Queue<Produto>>(checkoutUrl.checkout(), {pilha: pilhaString, cliente});
	}
}
