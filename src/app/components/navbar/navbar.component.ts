import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
	@Output() pesquisaEnviada = new EventEmitter<string>();
	@Input() isLoadingSearch = false;
	@Input() notHomePage = false;
	@Input() totalProdutosNoCarrinho!: string;
	@Input() nomePagina!: string;

	toggleMenu(): void {
		const menu = document.querySelector('.menu');

		if (menu) {
			menu.classList.toggle('hidden');
		}
	}

	enviarPesquisa(termo: string) {
		this.pesquisaEnviada.emit(termo);
	}
}
