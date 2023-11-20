import {Component, Inject, Input, Output, type OnInit, EventEmitter} from '@angular/core';
import {type No} from 'src/app/helpers/dataStructures/no';
import {type Stack} from 'src/app/helpers/dataStructures/stack';
import {CarrinhoService} from 'src/app/services/carrinho.service';
import {Carrinho} from 'src/types/carrinho.interface';
import {type Produto} from 'src/types/produto.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
	@Output() totalProdutos = new EventEmitter<string>();
	@Input() produto!: Produto;
	@Input() isCarrinho = false;
	pilhaProduto!: Stack<Produto>;
	carrinho: Carrinho = new Carrinho();

	constructor(
		@Inject(CarrinhoService) private readonly carrinhoService: CarrinhoService,
	) { }

	ngOnInit(): void {
		if (!this.produto.imagem) {
			this.produto.imagem = 'assets/images/image-not-found.png';
		}

		this.produtosNoCarrinho();
	}

	adicionar(produto: Produto) {
		this.carrinhoService.addToCarrinho(produto);

		this.produtosNoCarrinho();
	}

	private produtosNoCarrinho() {
		this.carrinhoService.carrinho$.subscribe(carrinho => {
			this.pilhaProduto = carrinho.pilha;
		});

		this.totalProdutosNoCarrinho();
	}

	private totalProdutosNoCarrinho(): void {
		let totalProdutos = 0;
		let no: No<Produto> | undefined = this.pilhaProduto.top;
		while (no) {
			totalProdutos++;
			no = no.next;
		}

		this.totalProdutos.emit(totalProdutos.toString());
	}
}
