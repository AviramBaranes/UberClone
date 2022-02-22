export interface RestaurantItem {
  name: string;
  image_url: string;
  price: string;
  reviews: string;
  rating: rating;
  categories: { title: string }[];
}
