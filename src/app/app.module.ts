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

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		InputSearchComponent,
		FilterSearchComponent,
		ProductCardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
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
