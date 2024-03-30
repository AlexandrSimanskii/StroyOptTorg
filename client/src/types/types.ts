export type Product = {
  name: string;
  image: string;
  regularPrice: number;
  discountPrice: number;
  sale: number;
  article: string;
  _id: string;
  isLike: boolean;
  isComparison: boolean;
};

export type News = {
  _id: string;
  image: string;
  title: string;
  information: string;
  category: string;
  date: string;
};

export type SortFilterProps = {
  limit: number;
  setLimit?: React.Dispatch<React.SetStateAction<number>>;
  sort: string;
  setSort?: React.Dispatch<React.SetStateAction<string>>;
};

export type AsideFilterProps = {
  price: number[];
  setPrice?: React.Dispatch<React.SetStateAction<number[]>>;
  brand: string[];
  setBrand?: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  setCategory?: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};
