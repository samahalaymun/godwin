export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onPress: (id: string) => void;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}


