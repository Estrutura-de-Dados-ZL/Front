export type Cliente = {
    id: number;
    nome: string;
    cpf?: string;
    cnpj?: string;
    tipoPessoa: string;
    telefone: string;
    email: string;
    rua: string;
    numero: number;
    cep: string;
    complemento: string;
};