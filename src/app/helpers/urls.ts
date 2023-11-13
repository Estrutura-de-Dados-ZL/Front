import {environment} from 'src/environments/environment';

export const produtoUrl = {
	getAll: (): string => `${environment.link}/produto`,
	getById: (id: number): string => `${environment.link}/produto/${id}`,
	getByNomeTipo: (id: number, nome: string): string => `${environment.link}/produto/${id}/${nome}`,
};

export const tipoProdutoUrl = {
	getAll: (): string => `${environment.link}/tipoProduto`,
	getById: (id: number): string => `${environment.link}/tipoProduto/${id}`,
};

export const clienteUrl = {
	getAll: (): string => `${environment.link}/cliente`,
	getById: (id: number): string => `${environment.link}/cliente/${id}`,
};

export const checkoutUrl = {
	checkout: (): string => `${environment.link}/carrinho`,
};
