import {environment} from 'src/environments/environment';

export const produtoUrl = {
	getAll: () => `${environment.link}/produto`,
	getById: (id: number) => `${environment.link}/produto/${id}`,
};

export const tipoProdutoUrl = {
	getAll: () => `${environment.link}/tipoProduto`,
	getById: (id: number) => `${environment.link}/tipoProduto/${id}`,
};

export const clienteUrl = {
	getAll: () => `${environment.link}/cliente`,
	getById: (id: number) => `${environment.link}/cliente/${id}`,
};
