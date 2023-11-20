import { Component, Inject } from '@angular/core';
import { Cliente } from 'src/types/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
    colunas = [
      'id',
      'nome',
      'endereco',
      'telefone',
    ];

    showModalEditar = false;
    showModalDeletar = false;
    showModalAdicionar = false;
    clienteSelecionado!: Cliente;
    clientes: Cliente[] = [];
    constructor(
    @Inject(ClienteService) private readonly clienteService: ClienteService,){}

    ngOnInit(): void {
      this.carregarClientes();
    }

    abrirModalEditar(cliente: Cliente): void {
      this.clienteSelecionado = {...cliente};
      this.showModalEditar = true;
    }
    
    abrirModalDeletar(tipoProduto: Cliente): void {
      this.clienteSelecionado = tipoProduto;
      this.showModalDeletar = true;
    }

    abrirModalAdicionar(): void {
      this.showModalAdicionar = true;
    }


    editarCliente(): void {
        this.clienteService.update(this.clienteSelecionado).subscribe(() => {
          this.carregarClientes();
          this.showModalEditar = false;
        });
      
    }
    
    deletarCliente(): void {
      this.clienteService.delete(this.clienteSelecionado.id).subscribe(() => {
        this.carregarClientes();
        this.showModalDeletar = false;
      });
    }

    private carregarClientes(): void {
      this.clienteService.getAll().subscribe(clientes => {
        if (clientes.length > 0) {
          this.clientes = clientes;
        }
      });
    }

  }