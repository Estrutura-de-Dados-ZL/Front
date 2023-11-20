import {environment} from 'src/environments/environment';

export const produtoUrl = {
	getAll: (): string => `${environment.link}/produto`,
	getById: (id: number): string => `${environment.link}/produto/${id}`,
	getByNomeTipo: (id: number, nome: string): string => `${environment.link}/produto/${id}/${nome}`,
	update: (id: number): string => `${environment.link}/produto/${id}`,
	create: (): string => `${environment.link}/produto`,
};

export const tipoProdutoUrl = {
	getAll: (): string => `${environment.link}/tipoProduto`,
	getById: (id: number): string => `${environment.link}/tipoProduto/${id}`,
	update: (id: number): string => `${environment.link}/tipoProduto/${id}`,
};

export const clienteUrl = {
	getAll: (): string => `${environment.link}/cliente`,
	getById: (id: number): string => `${environment.link}/cliente/${id}`,
};

export const checkoutUrl = {
	checkout: (idClient: number): string => `${environment.link}/checkout/${idClient}`,
};
