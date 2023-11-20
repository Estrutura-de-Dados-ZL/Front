import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BadgeModule} from 'primeng/badge';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {InputSearchComponent} from './components/input-search/input-search.component';
import {FilterSearchComponent} from './components/filter-search/filter-search.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {HttpClientModule} from '@angular/common/http';
import {CarrinhoComponent} from './pages/carrinho/carrinho.component';
import {TabelaComponent} from './components/table/tabela/tabela.component';
import {ProdutosComponent} from './pages/produtos/produtos.component';
import {TipoProdutosComponent} from './pages/tipo-produtos/tipo-produtos.component';
import {CommonModule} from '@angular/common';
import { ClienteComponent } from './pages/cliente/cliente.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		InputSearchComponent,
		FilterSearchComponent,
		ProductCardComponent,
		CarrinhoComponent,
		TabelaComponent,
		ProdutosComponent,
		TipoProdutosComponent,
  ClienteComponent,
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MenubarModule,
		FormsModule,
		InputTextModule,
		RadioButtonModule,
		BadgeModule,
		TableModule,
		DialogModule,
		ButtonModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
