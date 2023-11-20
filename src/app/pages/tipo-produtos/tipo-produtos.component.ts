import {Component, Inject} from '@angular/core';
import {TipoProdutoService} from 'src/app/services/tipo-produto.service';
import {type TipoProduto} from 'src/types/tipoProduto.interface';

@Component({
	selector: 'app-tipo-produtos',
	templateUrl: './tipo-produtos.component.html',
	styleUrls: ['./tipo-produtos.component.css'],
})
export class TipoProdutosComponent {
	colunas = [
		'id',
		'descricao',
	];

	tipoProdutos: TipoProduto [] = [];

	constructor(@Inject(TipoProdutoService) private readonly tipoProdutoService: TipoProdutoService) {}

	ngOnInit(): void {
		this.carregarTipoProdutos();
	}

	carregarTipoProdutos(): void {
		this.tipoProdutoService.getAll().subscribe(tipoProdutos => {
			if (tipoProdutos.length > 0) {
				this.tipoProdutos = tipoProdutos;
			}
		});
	}
}
