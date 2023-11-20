import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-tabela',
	templateUrl: './tabela.component.html',
	styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent {
	@Input() colunas: string[] = [];
	@Input() data: any[] = [];
	@Output() dataEdit = new EventEmitter<any>();
	@Output() dataDelete = new EventEmitter<any>();
	@Output() dataAdd = new EventEmitter<boolean>();

	editar(data: any) {
		this.dataEdit.emit(data);
	}

	deletar(data: any) {
		this.dataDelete.emit(data);
	}

	adicionar() {
		this.dataAdd.emit(true);
	}
}
