import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BadgeModule} from 'primeng/badge';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {InputSearchComponent} from './components/input-search/input-search.component';
import {FilterSearchComponent} from './components/filter-search/filter-search.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		InputSearchComponent,
		FilterSearchComponent,
		ProductCardComponent,
  CarrinhoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MenubarModule,
		FormsModule,
		InputTextModule,
		RadioButtonModule,
		BadgeModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
