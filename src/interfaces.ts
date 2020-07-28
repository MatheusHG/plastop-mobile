export interface Client {
  name: string;
  city: string;
  phone: string;
}

export interface Order {
  name: string;
  phone: string;
  city: string;
  paymentForm: string;
  price: number;
  date: string;
}
