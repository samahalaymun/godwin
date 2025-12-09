export type RootTabParamList = {
  Home: undefined;
  Products: undefined;
  Wishlist: undefined;
  Cart: undefined;
  Settings: undefined;
};
export type MainStackParamList = {
  MainTabs: undefined;
  Category: { id: string; name: string };
  Search: undefined;
  ProductDetails: { id: string };
  Auth: { redirectTo?: RedirectableRoute; redirectParams?: any } | undefined;
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
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RedirectableRoute = AllRoutes;

export type AllRoutes =
  | keyof RootTabParamList
  | keyof MainStackParamList
  | keyof AuthStackParamList;
