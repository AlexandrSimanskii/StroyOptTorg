export interface Product {
  name: string;
  image: string;
  regularPrice: number;
  discountPrice: number;
  sale: number;
  article: string;
  _id: string;
  isLike: boolean;
  isComparison: boolean;
}

export interface News {
  _id: string;
  image: string;
  title: string;
  information: string;
  category: string;
  date: string;
}
