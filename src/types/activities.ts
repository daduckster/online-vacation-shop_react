export interface ActivityPlate {
  name: string,
  description: string,
  price: number,
  currency: string,
  src: string,
  alt: string,
  isClicked: boolean;
}

export interface BasicPrice {
  days: number;
  price: number;
}
