import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subject, debounceTime} from 'rxjs';

@Component({
	selector: 'app-input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent {
	@Output() pesquisaEnviada = new EventEmitter<string>();
	@Input() isLoadingSearch = false;
	@Input() isCrud!: boolean;

	navbarOpen = false;
	inputPesquisa = '';

	private readonly searchSubject = new Subject<string>();
	private get debounceTimeMs(): number {
		return 400;
	}

	ngOnInit(): void {
		this.searchSubject
			.pipe(debounceTime(this.debounceTimeMs))
			.subscribe(termo => {
				this.performSearch(termo);
			});
	}

	ngOnDestroy(): void {
		this.searchSubject.complete();
	}

	onSearch(): void {
		this.searchSubject.next(this.inputPesquisa);
	}

	performSearch(termo: string): void {
		this.enviarPesquisa(termo);
	}

	enviarPesquisa(termo: string): void {
		this.pesquisaEnviada.emit(termo);
	}
}
