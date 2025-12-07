export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Products: undefined;
  Wishlist: undefined;
  Cart: undefined;
  Settings: undefined;
};
export type MainStackParamList = {
  Home: undefined;
  Category: { id: string,name:string };
};
export type TabItem = {
  name: keyof RootTabParamList;
  label: string;
  icon: string;
  title?: string;
  header?: React.ReactNode;
  component: React.ReactNode;
};

export interface HeaderProps {
  title: string;
  serachButton: boolean;
}