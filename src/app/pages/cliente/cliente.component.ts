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

	private carregarClientes(): void {
		this.clienteService.getAll().subscribe(clientes => {
			if (clientes.length > 0) {
				this.clientes = clientes;
			}
		});
	}
}
