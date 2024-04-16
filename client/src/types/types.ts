export type Characteristics = {
  "Тип товара"?: string;

  "Мощность (Вт)"?: string;

  "Емкость АКБ (А/ч)"?: string;

  "Крутящий момент макс. (Н/м)"?: string;

  "Напряжение аккумулятора (В)"?: string;

  Цвет?: string;

  "Диаметр патрона мин. (мм)"?: string;

  "Диаметр патрона макс. (мм)"?: string;

  "Скорость вращения I (об/мин)"?: string;

  "Скорость вращения II (об/мин)"?: string;

  "Диаметр сверления дерева макс. (мм)"?: string;

  "Диаметр сверления металла макс. (мм)"?: string;

  "Тип двигателя"?: string;

  "Вес (кг)"?: string;

  "Тип патрона"?: string;

  "Тип аккумулятора"?: string;
};

export type Product = {
  name: string;
  label: string;
  image: string;
  regularPrice: number;
  discountPrice: number;
  sale: number;
  article: string;
  _id: string;
  isLike: boolean;
  isComparison: boolean;
  "additional photos": string[];
  characteristics: Characteristics;
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
  startIndex: number;
  category: string;
  label: string[];
  price: number[];
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setCountPages: React.Dispatch<React.SetStateAction<number>>;
};

export type AsideFilterProps = {
  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;
  label: string[];
  setLabel: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  limit: number;
  sort: string;
  setCountPages: React.Dispatch<React.SetStateAction<number>>;
};
export type Review = {
  _id: string;
  createdAt: string;
  name: string;
  email: string;
  text: string;
  imageUrls?: string[] | [];
};
export type Inputs = {
  imageUrls: string[] | [];
  name: string;
  email: string;
  text: string;
  phone?: string;
};
