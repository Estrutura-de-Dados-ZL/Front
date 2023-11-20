import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProdutoService} from 'src/app/services/produto.service';
import {TipoProdutoService} from 'src/app/services/tipo-produto.service';
import {type Produto} from 'src/types/produto.interface';
import {type TipoProduto} from 'src/types/tipoProduto.interface';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
	colunas = [
		'id',
		'nome',
		'valor',
		'quantidade',
	];

	showModalEditar = false;
	showModalDeletar = false;
	showModalAdicionar = false;
	produtoSelecionado!: Produto;
	produtos: Produto[] = [];
	tipoProdutos: TipoProduto[] = [];
	tipoProdutoSelecionado = new FormControl<TipoProduto | undefined>(undefined);
	produtoAdicionar = new FormGroup({
		nome: new FormControl('', {validators: [Validators.required]}),
		valor: new FormControl('', {validators: [Validators.required]}),
		quantidade: new FormControl('', {validators: [Validators.required]}),
		descricao: new FormControl('', {validators: [Validators.required]}),
		imagem: new FormControl('', {validators: [Validators.required]}),
		tipoProduto: new FormControl('', {validators: [Validators.required]}),
	});

	constructor(
		@Inject(ProdutoService) private readonly produtoService: ProdutoService,
		@Inject(TipoProdutoService) private readonly tipoProdutoService: TipoProdutoService,
	) {}

	ngOnInit(): void {
		this.carregarProdutos();
		this.carregarTipoProdutos();
	}

	abrirModalEditar(produto: Produto): void {
		this.produtoSelecionado = {...produto};
		this.ordenaTiposProdutos();
		this.setarValorInicialForm();
		this.showModalEditar = true;
	}

	abrirModalDeletar(produto: Produto): void {
		this.produtoSelecionado = produto;
		this.showModalDeletar = true;
	}

	abrirModalAdicionar(): void {
		this.showModalAdicionar = true;
	}

	editarProduto(): void {
		if (this.tipoProdutoSelecionado.value) {
			this.produtoSelecionado.tipoProduto = this.tipoProdutoSelecionado.value;
			this.produtoService.update(this.produtoSelecionado).subscribe(() => {
				this.carregarProdutos();
				this.showModalEditar = false;
			});
		}
	}

	deletarProduto(): void {
		this.produtoService.delete(this.produtoSelecionado.id).subscribe(() => {
			this.carregarProdutos();
			this.showModalDeletar = false;
		});
	}

	private setarValorInicialForm(): void {
		this.tipoProdutoSelecionado.setValue(this.produtoSelecionado.tipoProduto);
	}

	private ordenaTiposProdutos(): void {
		if (this.produtoSelecionado && this.tipoProdutos) {
			const index = this.tipoProdutos.findIndex((tipo, i) => tipo.id === this.produtoSelecionado.tipoProduto.id);
			this.tipoProdutos.splice(index, 1);
			this.tipoProdutos.unshift(this.produtoSelecionado.tipoProduto);
		}
	}

	private carregarProdutos(): void {
		this.produtoService.getAll().subscribe(produtos => {
			if (produtos.length > 0) {
				this.produtos = produtos;
			}
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
