import {Component} from '@angular/core';
import {Carrinho} from 'src/types/carrinho.interface';
import {type Produto} from 'src/types/produto.interface';

@Component({
	selector: 'app-carrinho',
	templateUrl: './carrinho.component.html',
	styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
	carrinho: Carrinho = new Carrinho();

	adicionar(produto: Produto) {
		this.carrinho.pilha.push(produto);
		console.log(this.carrinho);
	}

	remover() {
		if (!this.carrinho.pilha.isEmpty()) {
			this.carrinho.pilha.pop();
		}
	}
}
