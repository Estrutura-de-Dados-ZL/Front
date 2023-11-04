import {Component} from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	isLoadingSearch = false;

	receberPesquisa(termo: string) {
		this.isLoadingSearch = true;
		console.log('Termo de pesquisa:', termo);
		setTimeout(() => {
			this.isLoadingSearch = false;
		}
		, 2000);
	}
}
