export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onPress: (id: number) => void;
  width: number;
  height:number;
  homePage?:boolean;
}
export type ProductsListProps = {
  products: Product[];
  isRefetching: boolean;
  refetch: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage:()=>void;
};
export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}



