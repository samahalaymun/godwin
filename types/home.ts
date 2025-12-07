export type HomeBannerProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onPress?: () => void;
};

export type HomeCategoryItemProps = {
  onPress: (item: Category) => void;
  item: Category;
};
export type Category = {
  id: string;
  icon: string;
  name: string;
};