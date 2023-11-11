import {Component, Inject, type OnInit} from '@angular/core';
import {ProdutoService} from 'src/app/services/produto.service';
import {type Produto} from 'src/types/produto.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	isLoadingSearch = false;

	produtos: Produto[] = [];

	constructor(@Inject(ProdutoService) private readonly produtoService: ProdutoService) {}

	ngOnInit(): void {
		this.carregarProdutos();
	}

	carregarProdutos(): void {
		this.produtoService.getAll().subscribe(produtos => {
			if (produtos.length > 0) {
				this.produtos = produtos;
			}
		});
	}

	receberPesquisa(termo: string) {
		this.isLoadingSearch = true;
		console.log('Termo de pesquisa:', termo);
		setTimeout(() => {
			this.isLoadingSearch = false;
		}
		, 2000);
	}

	receberFiltro(filtro: {nome: string; valor: string}) {
		console.log('filtro de pesquisa:', filtro);
	}
}
