import {type Checkout} from './checkout.interface';

export class CheckoutFilter {
	id: number;
	nomeCliente: string;
	totalProdutos: number;
	valorTotal: string;

	constructor(checkout: Checkout) {
		this.id = checkout.id;
		this.nomeCliente = checkout.cliente.nome;
		this.totalProdutos = checkout.lista.length;
		this.valorTotal = `R$ ${checkout.valorTotal}`;
	}
}
