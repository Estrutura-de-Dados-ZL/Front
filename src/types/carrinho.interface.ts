import { Stack } from "src/app/helpers/dataStructures/stack";
import { Produto } from "./produto.interface";

export class Carrinho{

    pilha: Stack<Produto> = new Stack<Produto>();

}