import {Component, Inject} from '@angular/core';
import {ClienteService} from 'src/app/services/cliente.service';
import {type Cliente} from 'src/types/cliente.interface';

// eslint-disable-next-line @typescript-eslint/naming-convention
const CLIENTE_CADASTRO = {
	id: 0,
	nome: '',
	cpf: '',
	cnpj: '',
	telefone: '',
	email: '',
	rua: '',
	numero: 0,
	cep: '',
	complemento: '',
};
@Component({
	selector: 'app-cliente',
	templateUrl: './cliente.component.html',
	styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
	colunas = [
		'id',
		'nome',
		'email',
	];

	clienteCadastro: Cliente = CLIENTE_CADASTRO;
	clienteSelecionado!: Cliente;
	clientes: Cliente [] = [];
	showModalEditar = false;
	showModalDeletar = false;
	showModalCadastrar = false;
	totalProdutosNoCarrinho = '0';
	radioBtnEscolhido = '';
	isLoadingSearch = false;
	termoPesquisa = '';

	constructor(@Inject(ClienteService) private readonly clienteService: ClienteService) {}

	ngOnInit(): void {
		this.carregarClientes();
		const totalProdutosNoCarrinho = localStorage.getItem('totalProdutosCarrinho');
		if (totalProdutosNoCarrinho) {
			this.totalProdutosNoCarrinho = totalProdutosNoCarrinho;
		}
	}

	abrirModalEditar(cliente: Cliente): void {
		this.clienteSelecionado = {...cliente};
		this.showModalEditar = true;
	}

	abrirModalCadastrar(abrir: boolean): void {
		this.showModalCadastrar = true;
	}

	abrirModalDeletar(cliente: Cliente): void {
		this.clienteSelecionado = cliente;
		this.showModalDeletar = true;
	}

	cadastrarCliente(): void {
		this.clienteService.create(this.clienteCadastro).subscribe(() => {
			this.carregarClientes();
		});
		this.clienteCadastro = CLIENTE_CADASTRO;
		this.showModalCadastrar = false;
	}

	editaCliente(cliente: Cliente): void {
		this.clienteService.update(cliente).subscribe(() => {
			this.carregarClientes();
		});
		this.showModalEditar = false;
	}

	deletarCliente(cliente: Cliente): void {
		this.clienteService.delete(cliente.id).subscribe(() => {
			this.carregarClientes();
		});
		this.showModalDeletar = false;
	}

	setRadioBtnEscolhido(radioBtnEscolhido: string): void {
		this.radioBtnEscolhido = radioBtnEscolhido;
		if (radioBtnEscolhido === 'PF') {
			this.clienteCadastro.cnpj = '';
		} else {
			this.clienteCadastro.cpf = '';
		}
	}

	receberPesquisa(termoPesquisa: string) {
		this.isLoadingSearch = true;
		if (termoPesquisa === '') {
			this.termoPesquisa = 'colevati';
		} else {
			this.termoPesquisa = termoPesquisa;
		}

		this.filtrarClientes();
	}

	filtrarClientes(): void {
		if (this.termoPesquisa === 'colevati') {
			this.carregarClientes();
			return;
		}

		this.clienteService.getByNome(this.termoPesquisa).subscribe(clientes => {
			if (clientes.length > 0) {
				this.clientes = clientes;
			}

			this.isLoadingSearch = false;
		});
	}

	private carregarClientes(): void {
		this.clienteService.getAll().subscribe(clientes => {
			if (clientes.length > 0) {
				this.clientes = clientes;
			}

			this.isLoadingSearch = false;
		});
	}
}
