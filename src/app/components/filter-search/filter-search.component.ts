import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { TipoProdutoService } from 'src/app/services/tipo-produto.service';
import { TipoProduto } from 'src/types/tipoProduto.interface';

@Component({
	selector: 'app-filter-search',
	templateUrl: './filter-search.component.html',
	styleUrls: ['./filter-search.component.css'],
})
export class FilterSearchComponent implements OnInit{
	@Output() filtroEnviado = new EventEmitter<TipoProduto>();
	tipoSemFiltro = {descricao: 'Sem filtro', id: 0};

	filtroSelecionado!: TipoProduto;
	tipoProdutos: TipoProduto [] = [];

	constructor(@Inject(TipoProdutoService) private readonly tipoProdutoService: TipoProdutoService) {}

	ngOnInit(): void {
		this.carregarTipoProdutos()
	}

	enviarFiltro() {
		this.filtroEnviado.emit(this.filtroSelecionado);
	}

	carregarTipoProdutos(): void {
		this.tipoProdutoService.getAll().subscribe(tipoProdutos => {
			if (tipoProdutos.length > 0) {
				this.tipoProdutos = tipoProdutos;
			}
		});
	}

}
