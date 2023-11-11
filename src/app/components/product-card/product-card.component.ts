import {Component, Input} from '@angular/core';
import {type Produto} from 'src/types/produto.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
	@Input() produto!: Produto;

	ngOnInit(): void {
		if (!this.produto.imagem) {
			this.produto.imagem = 'assets/images/image-not-found.png';
		}
	}
}
