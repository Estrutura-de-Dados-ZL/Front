import {type Cliente} from './cliente.interface';
import {type Produto} from './produto.interface';

export type Checkout = {
	id: number;
	cliente: Cliente;
	valorTotal: number;
	lista: Produto[];
};
