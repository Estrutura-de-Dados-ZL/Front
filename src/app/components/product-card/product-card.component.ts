import {Component, Input} from '@angular/core';
import {type Product} from 'src/types/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
	@Input() product!: Product;
}
