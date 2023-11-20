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

	showModalEditar = false;
	showModalDeletar = false;
	showModalAdicionar = false;
	tipoProdutos: TipoProduto [] = [];
	tipoProdutoSelecionado!: TipoProduto;
	

	constructor(@Inject(TipoProdutoService) private readonly tipoProdutoService: TipoProdutoService) {}

	ngOnInit(): void {
		this.carregarTipoProdutos();
	}

	abrirModalEditar(tipoProduto: TipoProduto): void {
		this.tipoProdutoSelecionado = {...tipoProduto};
		this.showModalEditar = true;
	}

	abrirModalDeletar(tipoProduto: TipoProduto): void {
		this.tipoProdutoSelecionado = tipoProduto;
		this.showModalDeletar = true;
	}

	abrirModalAdicionar(): void{
		this.showModalAdicionar = true
	}

	editarTipoProduto(): void {
			this.tipoProdutoService.update(this.tipoProdutoSelecionado).subscribe(() => {
				this.carregarTipoProdutos();
				this.showModalEditar = false;
			});
	}

	deletarTipoProduto(): void {
		this.tipoProdutoService.delete(this.tipoProdutoSelecionado.id).subscribe(() => {
			this.carregarTipoProdutos();
			this.showModalDeletar = false;
		});
	}
	
	private carregarTipoProdutos(): void {
		this.tipoProdutoService.getAll().subscribe(tipoProdutos => {
			if (tipoProdutos.length > 0) {
				this.tipoProdutos = tipoProdutos;
			}
		});
	}
}
