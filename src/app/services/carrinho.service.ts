/* eslint-disable @typescript-eslint/member-ordering */
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Carrinho} from 'src/types/carrinho.interface';
import {type Produto} from 'src/types/produto.interface';

@Injectable({
	providedIn: 'root',
})
export class CarrinhoService {
	carrinho = new Carrinho();
	private readonly carrinhoSubject = new BehaviorSubject<Carrinho>(this.carrinho);
	carrinho$ = this.carrinhoSubject.asObservable();

	addToCarrinho(produto: Produto) {
		this.carrinho.pilha.push(produto);
	}

	removeFromCarrinho() {
		if (!this.carrinho.pilha.isEmpty()) {
			this.carrinho.pilha.pop();
		}
	}
}
