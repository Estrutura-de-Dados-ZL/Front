import {environment} from 'src/environments/environment';

export const produtoUrl = {
	getAll: () => `${environment.link}/produto`,
	getById: (id: number) => `${environment.link}/produto/${id}`,
	getByNomeTipo: (id: number, nome: string) => `${environment.link}/produto/${id}/${nome}`
};

export const tipoProdutoUrl = {
	getAll: () => `${environment.link}/tipoProduto`,
	getById: (id: number) => `${environment.link}/tipoProduto/${id}`,
};

export const clienteUrl = {
	getAll: () => `${environment.link}/cliente`,
	getById: (id: number) => `${environment.link}/cliente/${id}`,
};

export const checkoutUrl = {
	checkout: () => `${environment.link}/carrinho`
}