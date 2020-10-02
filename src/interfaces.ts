export interface Client {
  codigo: number;
  nome?: string;
  razao_social?: string;
  fantasia?: string;
  cnpj?: string;
  rg?: string;
  endereco?: string;
  bairro?: string;
  numero?: string;
  cidade?: string;
  uf?: string;
  telefone1?: string;
  telefone2?: string;
}

export interface Product {
  name: string;
  code: string;
  quantity: number;
  price: string;
  photo: string;
}

export interface Order {
  name: string;
  phone: string;
  city: string;
  paymentForm: string;
  price: string;
  date: string;
  address: string;
  uf: string;
  number: string;
  district: string;
  storeName: string;
  note: string;
  products: Product[];
}

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  isLoading: boolean;
  token: string | null;
  client: Client;
}
