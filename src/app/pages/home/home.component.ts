import {Component, Inject, type OnInit} from '@angular/core';
import {CheckoutService} from 'src/app/services/checkout.service';
import {ProdutoService} from 'src/app/services/produto.service';
import {TipoProdutoService} from 'src/app/services/tipo-produto.service';
import {Carrinho} from 'src/types/carrinho.interface';
import { Cliente } from 'src/types/cliente.interface';
import {type Produto} from 'src/types/produto.interface';
import {type TipoProduto} from 'src/types/tipoProduto.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	carrinho: Carrinho = new Carrinho();
	isLoadingSearch = false;
	produtos: Produto[] = [];
	termoPesquisa = 'colevati';
	tipoProdutoId = 0;

	constructor(@Inject(ProdutoService) private readonly produtoService: ProdutoService,
		@Inject(CheckoutService) private readonly checkoutService: CheckoutService) {}

	ngOnInit(): void {
		this.carregarProdutos();
	}

	adicionar(produto: Produto) {
		this.carrinho.pilha.push(produto);
	}

	remover() {
		if (!this.carrinho.pilha.isEmpty()) {
			this.carrinho.pilha.pop();
			console.log(this.carrinho);
		}
	}

	carregarProdutos(): void {
		this.produtoService.getAll().subscribe(produtos => {
			if (produtos.length > 0) {
				this.produtos = produtos;
			}
		});
	}

	teste(): void {
		console.log(this.carrinho);

		const cliente: Cliente = {
			id: 1,
			nome: 'string',
			cpf: 'string',
			tipoPessoa: 'string',
			telefone: 'string',
			email: 'string',
			rua: 'string',
			numero: 1,
			cep: 'string',
			complemento: 'string',
		}

		this.checkoutService.checkout(this.carrinho.pilha, cliente).subscribe(p => {
			console.log(p);
		});
	}

	receberPesquisa(termoPesquisa: string) {
		this.isLoadingSearch = true;
		if (termoPesquisa === '') {
			this.termoPesquisa = 'colevati';
		} else {
			this.termoPesquisa = termoPesquisa;
		}

		this.filtrarProdutos();
	}

	receberFiltro(filtro: TipoProduto) {
		this.tipoProdutoId = filtro.id;
		this.filtrarProdutos();
	}

	filtrarProdutos() {
		if (this.tipoProdutoId === 0 && this.termoPesquisa === 'colevati') {
			this.carregarProdutos();
			this.isLoadingSearch = false;
		} else {
			this.produtoService.getByNomeTipo(this.tipoProdutoId, this.termoPesquisa).subscribe(produtos => {
				this.produtos = produtos;
				this.isLoadingSearch = false;
			});
		}
	}
}
