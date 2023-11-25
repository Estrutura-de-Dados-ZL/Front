import {environment} from 'src/environments/environment';

export const produtoUrl = {
	getAll: (): string => `${environment.link}/produto`,
	getById: (id: number): string => `${environment.link}/produto/${id}`,
	getByNomeTipo: (id: number, nome: string): string => `${environment.link}/produto/${id}/${nome}`,
	update: (id: number): string => `${environment.link}/produto/${id}`,
	save: (tipoProdutoId: number): string => `${environment.link}/produto/${tipoProdutoId}`,
	delete: (id: number): string => `${environment.link}/produto/${id}`,
	getByNome: (nome: string): string => `${environment.link}/produto/nome/${nome}`,
};

export const tipoProdutoUrl = {
	getAll: (): string => `${environment.link}/tipoProduto`,
	getById: (id: number): string => `${environment.link}/tipoProduto/${id}`,
	getByDescricao: (descricao: string): string => `${environment.link}/tipoProduto/descricao/${descricao}`,
	update: (id: number): string => `${environment.link}/tipoProduto/${id}`,
	save: (): string => `${environment.link}/tipoProduto`,
	delete: (id: number): string => `${environment.link}/tipoProduto/${id}`,
};

export const clienteUrl = {
	getAll: (): string => `${environment.link}/cliente`,
	getById: (id: number): string => `${environment.link}/cliente/${id}`,
	getByNome: (nome: string): string => `${environment.link}/cliente/nome/${nome}`,
	update: (id: number): string => `${environment.link}/cliente/${id}`,
	save: (): string => `${environment.link}/cliente`,
	delete: (id: number): string => `${environment.link}/cliente/${id}`,
};

export const checkoutUrl = {
	checkout: (idClient: number): string => `${environment.link}/checkout/${idClient}`,
	getCheckout: (): string => `${environment.link}/checkout`,
	getCheckoutById: (id: number): string => `${environment.link}/checkout/${id}`,
};
