import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {type Observable} from 'rxjs';

import {checkoutUrl} from '../helpers/urls';
import {type Stack} from '../helpers/dataStructures/stack';
import {type Produto} from 'src/types/produto.interface';
import {type Checkout} from 'src/types/checkout.interface';

@Injectable({
	providedIn: 'root',
})
export class CheckoutService {
	constructor(@Inject(HttpClient) private readonly http: HttpClient) { }

	checkout(pilhaProduto: Stack<Produto>, idCliente: number): Observable<Checkout> {
		const pilhaString = JSON.stringify(pilhaProduto);
		return this.http.post<Checkout>(checkoutUrl.checkout(idCliente), {pilha: pilhaString});
	}

	getAll(): Observable<Checkout[]> {
		return this.http.get<Checkout[]>(checkoutUrl.getCheckout());
	}

	getById(id: number): Observable<Checkout> {
		return this.http.get<Checkout>(checkoutUrl.getCheckoutById(id));
	}
}
