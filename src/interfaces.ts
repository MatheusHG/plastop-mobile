export interface Client {
  name: string;
  city: string;
  phone: string;
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
  logged: boolean;
}
