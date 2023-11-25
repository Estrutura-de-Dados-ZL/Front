import {Component, Inject, type OnInit} from '@angular/core';
import {CheckoutService} from 'src/app/services/checkout.service';
import {type Checkout} from 'src/types/checkout.interface';
import {CheckoutFilter} from 'src/types/checkoutFilter.interface';

@Component({
	selector: 'app-historico-compras',
	templateUrl: './historico-compras.component.html',
	styleUrls: ['./historico-compras.component.css'],
})
export class HistoricoComprasComponent implements OnInit {
	colunas = [
		'id',
		'nomeCliente',
		'totalProdutos',
		'valorTotal',
	];

	checkout: Checkout[] = [];
	checkoutFilter: CheckoutFilter[] = [];
	checkoutSelecionado: Checkout | undefined;
	totalProdutosNoCarrinho = '0';
	displayModal = false;

	constructor(@Inject(CheckoutService) private readonly checkoutService: CheckoutService) {}

	ngOnInit(): void {
		this.carregarCompras();
		const totalProdutosNoCarrinho = localStorage.getItem('totalProdutosCarrinho');
		if (totalProdutosNoCarrinho) {
			this.totalProdutosNoCarrinho = totalProdutosNoCarrinho;
		}
	}

	abrirModal(checkoutFilter: CheckoutFilter): void {
		if (checkoutFilter.id && this.checkout.length > 0) {
			this.checkoutSelecionado = this.checkout.find(c => c.id === checkoutFilter.id);
			this.displayModal = true;
		}
	}

	private carregarCompras(): void {
		this.checkoutService.getAll().subscribe(checkout => {
			if (checkout.length > 0) {
				this.checkout = checkout;
				this.checkoutFilter = checkout.map(checkout => new CheckoutFilter(checkout));
			}
		});
	}
}
