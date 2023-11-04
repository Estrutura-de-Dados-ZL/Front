import {Component} from '@angular/core';
import {type Product} from 'src/types/product.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	isLoadingSearch = false;

	product: Product = {
		id: 1,
		name: 'Smartphone',
		price: 1000,
		description: 'Apenas um smartphone',
		ammount: 10,
		photo: 'https://picsum.photos/200/300',
	};

	receberPesquisa(termo: string) {
		this.isLoadingSearch = true;
		console.log('Termo de pesquisa:', termo);
		setTimeout(() => {
			this.isLoadingSearch = false;
		}
		, 2000);
	}

	receberFiltro(filtro: {nome: string; valor: string}) {
		console.log('filtro de pesquisa:', filtro);
	}
}
