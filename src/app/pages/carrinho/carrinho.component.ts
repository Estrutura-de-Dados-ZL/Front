import {Component, Inject, type OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {type No} from 'src/app/helpers/dataStructures/no';
import {type Stack} from 'src/app/helpers/dataStructures/stack';
import {CarrinhoService} from 'src/app/services/carrinho.service';
import {CheckoutService} from 'src/app/services/checkout.service';
import {ClienteService} from 'src/app/services/cliente.service';
import {type Cliente} from 'src/types/cliente.interface';
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
	clienteSelecionado = new FormControl<Cliente | undefined>(undefined);
	clientes: Cliente[] = [];
	constructor(
		@Inject(CarrinhoService) private readonly carrinhoService: CarrinhoService,
		@Inject(CheckoutService) private readonly checkoutService: CheckoutService,
		@Inject(ClienteService) private readonly clienteService: ClienteService,
	) {	}

	ngOnInit(): void {
		this.carrinhoService.carrinho$.subscribe(carrinho => {
			this.pilhaProduto = carrinho.pilha;
		});
		this.pilhaToArrProdutos();
		this.carregarClientes();
	}

	carregarClientes(): void {
		this.clienteService.getAll().subscribe(clientes => {
			if (clientes.length > 0) {
				this.clientes = clientes;
			}
		});
	}

	remover() {
		this.carrinhoService.removeFromCarrinho();
		this.pilhaToArrProdutos();
	}

	checkout(): void {
		const idCliente = this.clienteSelecionado.value?.id;
		if (idCliente) {
			this.carrinhoService.carrinho$.subscribe(carrinho => {
				this.checkoutService.checkout(carrinho.pilha, idCliente).subscribe(p => {
					console.log(p);
					this.voltar();
				});
			});
		}
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
		localStorage.setItem('totalProdutosCarrinho', this.totalProdutosNoCarrinho);
	}
}
