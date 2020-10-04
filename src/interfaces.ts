export interface Client {
  codigo: number;
  nome?: string;
  razao_social?: string;
  nome_fantasia?: string;
  cnpj?: string;
  rg?: string;
  rua?: string;
  bairro?: string;
  numero?: string;
  cidade?: string;
  referencia?: string;
  uf?: string;
  telefone1?: string;
  telefone2?: string;
  data?: string | null;
  total?: string | null;
}

export interface Product {
  nome: string;
  codigo_produto: string;
  quantidade: number;
  preco: string;
  url_imagem: string;
}

export interface ProductOrder {
  codigo: number;
  codigo_produto: number;
  nome: string;
  preco: number;
  url_image: string;
  url_imagem: string;
  quantidade: number;
}

export interface Order {
  codigo: number;
  total: string;
  codigo_cliente: number;
  pagamento?: string;
  observacao?: string;
  data?: string;
  nome: string;
  nome_fantasia: string;
  cidade: string;
  rua: string;
  uf: string;
  numero: number;
  telefone1: string;
  telefone2: string;
}

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  isLoading: boolean;
  token: string | null;
  orderProducts: ProductOrder[];
  totalOrder: number;
}
