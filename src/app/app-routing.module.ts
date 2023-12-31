import {NgModule} from '@angular/core';
import {RouterModule, type Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CarrinhoComponent} from './pages/carrinho/carrinho.component';
import {ProdutosComponent} from './pages/produtos/produtos.component';
import {TipoProdutosComponent} from './pages/tipo-produtos/tipo-produtos.component';
import {ClienteComponent} from './pages/cliente/cliente.component';
import {HistoricoComprasComponent} from './pages/historico-compras/historico-compras.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'carrinho', component: CarrinhoComponent},
	{path: 'produtos', component: ProdutosComponent},
	{path: 'tipoProdutos', component: TipoProdutosComponent},
	{path: 'clientes', component: ClienteComponent},
	{path: 'historicoCompras', component: HistoricoComprasComponent},
	{path: '**', redirectTo: ''},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
