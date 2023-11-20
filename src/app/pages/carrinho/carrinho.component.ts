import {Component, Inject, type OnInit} from '@angular/core';
import {type No} from 'src/app/helpers/dataStructures/no';
import {type Stack} from 'src/app/helpers/dataStructures/stack';
import {CarrinhoService} from 'src/app/services/carrinho.service';
import {CheckoutService} from 'src/app/services/checkout.service';
import {type Produto} from 'src/types/produto.interface';

@Component({
	selector: 'app-carrinho',
	templateUrl: './carrinho.component.html',
	styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
	pilhaProduto!: Stack<Produto>;
	arrProdutos: Produto[] = [];
	totalProdutosNoCarrinho = '0';
	constructor(
		@Inject(CarrinhoService) private readonly carrinhoService: CarrinhoService,
		@Inject(CheckoutService) private readonly checkoutService: CheckoutService,
	) {	}

	ngOnInit(): void {
		this.carrinhoService.carrinho$.subscribe(carrinho => {
			this.pilhaProduto = carrinho.pilha;
		});
		this.pilhaToArrProdutos();
	}

	remover() {
		this.carrinhoService.removeFromCarrinho();
		this.pilhaToArrProdutos();
	}

	checkout(): void {
		this.carrinhoService.carrinho$.subscribe(carrinho => {
			this.checkoutService.checkout(carrinho.pilha).subscribe(p => {
				console.log(p);
				this.voltar();
			});
		});
	}

	private voltar(): void {
		window.location.href = '/';
	}

	private pilhaToArrProdutos(): void {
		const arrProdutos: Produto[] = [];
		let no: No<Produto> | undefined = this.pilhaProduto.top;
		while (no) {
			arrProdutos.push(no.data);
			no = no.next;
		}

		this.arrProdutos = arrProdutos;
		this.totalProdutosNoCarrinho = this.arrProdutos.length.toString();
	}
}
