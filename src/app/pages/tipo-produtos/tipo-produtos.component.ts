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

	tipoProdutoCadastro!: TipoProduto;
	tipoProdutoSelecionado!: TipoProduto;
	tipoProdutos: TipoProduto [] = [];
	showModalEditar = false;
	showModalDeletar = false;
	showModalCadastrar = false;

	constructor(@Inject(TipoProdutoService) private readonly tipoProdutoService: TipoProdutoService) {}

	ngOnInit(): void {
		this.carregarTipoProdutos();
	}

	abrirModalEditar(tipoProduto: TipoProduto): void {
		this.tipoProdutoSelecionado = {...tipoProduto};
		this.setarValorInicialForm();
		this.ordenaTiposProdutos();
		this.showModalEditar = true;
	}

	abrirModalCadastrar(tipoProduto: TipoProduto): void {
		console.log(tipoProduto);
		
		this.tipoProdutoCadastro = tipoProduto;
		this.showModalCadastrar = true;
	}

	abrirModalDeletar(tipoProduto: TipoProduto): void {
		this.tipoProdutoSelecionado = tipoProduto;
		this.showModalDeletar = true;
	}

	cadastrarTipoProduto(tipoProduto: TipoProduto): void {
		this.tipoProdutoService.create(tipoProduto).subscribe(() => {
			this.carregarTipoProdutos();
		});
	}

	editaTipoProduto(tipoProduto: TipoProduto): void {
		this.tipoProdutoService.update(tipoProduto).subscribe(() => {
			this.carregarTipoProdutos();
		});
	}

	deletarTipoProduto(tipoProduto: TipoProduto): void {
		this.tipoProdutoService.delete(tipoProduto.id).subscribe(() => {
			this.carregarTipoProdutos();
		});
	}

	private setarValorInicialForm(): void {
		this.tipoProdutoSelecionado = this.tipoProdutos.find(tipoProduto => tipoProduto.id === this.tipoProdutoSelecionado.id)!;
	}
	
	private ordenaTiposProdutos(): void {
		this.tipoProdutos.sort((a, b) => a.id - b.id);
	}

	carregarTipoProdutos(): void {
		this.tipoProdutoService.getAll().subscribe(tipoProdutos => {
			if (tipoProdutos.length > 0) {
				this.tipoProdutos = tipoProdutos;
			}
		});
	}
}
