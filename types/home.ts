export type HomeBannerProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onPress?: () => void;
};

export type CategoryCardProps = {
  onPress: (item: Category) => void;
  item: Category;
  width:number;
  height:number;
};
export type Category = {
  id: string;
  icon: string;
  name: string;
  slug:string
};