import {type TipoProduto} from './tipoProduto.interface';

export type Produto = {
	descricao: string;
	id: number;
	nome: string;
	valor: number;
	quantidade: number;
	imagem?: string;
	tipoProduto: TipoProduto;
};

