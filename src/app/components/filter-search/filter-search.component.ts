import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-filter-search',
	templateUrl: './filter-search.component.html',
	styleUrls: ['./filter-search.component.css'],
})
export class FilterSearchComponent {
	@Output() filtroEnviado = new EventEmitter<{nome: string; valor: string}>();
	tipoSemFiltro = {nome: 'Sem filtro', valor: ''};

	tiposProdutos = [
		{nome: 'Bens de conveniência', valor: ''},
		{nome: 'Bens de impulso', valor: ''},
		{nome: 'Bens de emergência', valor: ''},
		{nome: 'Bens de compra comparada', valor: ''},
		{nome: 'Bens de especialidade', valor: ''},
		{nome: 'Bens perecíveis', valor: ''},
		{nome: 'Bens duráveis', valor: ''},
		{nome: 'Bens não duráveis', valor: ''},
		{nome: 'Bens de capital', valor: ''},
		{nome: 'Partes e materiais', valor: ''},
		{nome: 'Abastecimento e serviços', valor: ''},
		{nome: 'Commodities', valor: ''},
		{nome: 'Produtos intermediários', valor: ''},
	];

	filtroSelecionado!: {nome: string; valor: string};

	enviarFiltro() {
		this.filtroEnviado.emit(this.filtroSelecionado);
	}
}
