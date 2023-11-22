import {Component, Inject} from '@angular/core';
import {TipoProdutoService} from 'src/app/services/tipo-produto.service';
import {type TipoProduto} from 'src/types/tipoProduto.interface';

// eslint-disable-next-line @typescript-eslint/naming-convention
const TIPO_PRODUTO_CADASTRO = {
	id: 0,
	descricao: '',
};

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

	tipoProdutoCadastro: TipoProduto = TIPO_PRODUTO_CADASTRO;
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

	abrirModalCadastrar(abrir: boolean): void {
		this.showModalCadastrar = true;
	}

	abrirModalDeletar(tipoProduto: TipoProduto): void {
		this.tipoProdutoSelecionado = tipoProduto;
		this.showModalDeletar = true;
	}

	cadastrarTipoProduto(): void {
		if (this.tipoProdutoCadastro.descricao === '') {
			return;
		}

		this.tipoProdutoService.create(this.tipoProdutoCadastro).subscribe(() => {
			this.carregarTipoProdutos();
		});
		this.tipoProdutoCadastro = TIPO_PRODUTO_CADASTRO;
		this.showModalCadastrar = false;
	}

	editaTipoProduto(tipoProduto: TipoProduto): void {
		this.tipoProdutoService.update(tipoProduto).subscribe(() => {
			this.carregarTipoProdutos();
		});
		this.showModalEditar = false;
	}

	deletarTipoProduto(tipoProduto: TipoProduto): void {
		this.tipoProdutoService.delete(tipoProduto.id).subscribe(() => {
			this.carregarTipoProdutos();
		});
	}

	private carregarTipoProdutos(): void {
		this.tipoProdutoService.getAll().subscribe(tipoProdutos => {
			if (tipoProdutos.length > 0) {
				this.tipoProdutos = tipoProdutos;
			}
		});
	}

	private deletartipoProduto(): void {
		this.tipoProdutoService.delete(this.tipoProdutoSelecionado.id).subscribe(() => {
			this.carregarTipoProdutos();
			this.showModalDeletar = false;
		});
	}

	private setarValorInicialForm(): void {
		this.tipoProdutoSelecionado = this.tipoProdutos.find(tipoProduto => tipoProduto.id === this.tipoProdutoSelecionado.id)!;
	}

	private ordenaTiposProdutos(): void {
		this.tipoProdutos.sort((a, b) => a.id - b.id);
	}
}
