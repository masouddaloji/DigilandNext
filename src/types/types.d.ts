import { Dispatch, ReactNode, Ref, SetStateAction } from "react";
export type FormControlProps = {
  controler:
    | "file"
    | "number"
    | "password"
    | "email"
    | "text"
    | "select"
    | "textarea"
    | "checkbox"
    | "editor";
  label: string;
  name: string;
  icon: ReactNode;
};
export type ComponentsProps = { children: ReactNode };
export type OutsideClickHandlerProps = {
  ref: Ref;
  setStateHandler: Dispatch<SetStateAction<boolean>>;
};
export type SidebarCartProps = {
  isShowSideBarCart: boolean;
  setIsShowSideBarCart: Dispatch<SetStateAction<boolean>>;
};
export type MobileMenuItemProps = {
  setShow: Dispatch<SetStateAction<boolean>>;
  title: string;
  link: string;
  subMenu: {
    id: string;
    title: string;
    link: string;
    shortLink: string;
    img: string;
  }[];
};
export type FooterSliderProps = {
  title: string;
  img: string;
};
export type SliderProps = {
  slide:
    | "SuggestedProductBox"
    | "CompanyProduct"
    | "ArticleBox"
    | "ProductCart"
    | "BannerBox"
    | "serviceBox"
    | "instantOffer"
    | "footerSlider";
  array: any[];
  slidesPerView?: number;
  spaceBetween: number;
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  loop: boolean;
  isLoading: boolean;
  isSuccess: boolean;
};
export type SectionHeaderProps = {
  title: string;
  link?: url;
  icon: ReactNode;
  btnLink?: string;
  bg: string;
  isLoading: boolean;
};
export type CompanyProductProps = {
  _id: string;
  title: string;
  image: string;
  price: number;
  offPrice: number;
  rating: number;
  isLoading: boolean;
  isSuccess: boolean;
};
export type TooltipProps = {
  title: string;
  children: ReactNode;
  isSmall: boolean;
};
export type StarProps = {
  rating: number;
};
export type ArticleProps = {
  _id: string;
  title: string;
  image: url;
  description: string;
  writer: string;
  reviews: string[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type ProductsProps = {
  _id: string;
  title: string;
  segment: string;
  image: string;
  gallery: string[];
  offPrice: number;
  price: number;
  rating: number;
  quantity: number;
  colors: string[];
  category: string;
  shortDescription: string;
  fullDescription: string;
  reviews: string[];
  brand: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  subCategory: string;
};

export type BannerBoxProps = {
  cover: url;
  link: url;
  isLoading: boolean;
  isSuccess: boolean;
};
export type InstantOfferProps = {
  _id: string;
  title: string;
  image: url;
  offPrice: number;
  price: number;
  rating: number;
  isLoading: boolean;
  isSuccess: boolean;
};
export type ArticleBoxProps = {
  _id: string;
  title: string;
  image: url;
  offPrice: number;
  price: number;
  rating: number;
  isLoading: boolean;
  isSuccess: boolean;
  writer: string;
  createdAt: Date;
};
export type ServiceBoxProps = {
  title: string;
  isLoading: boolean;
  isSuccess: boolean;
  icon: ReactNode;
  link: url;
};
export type ErrorProps = {
  title: string;
  type: "error" | "warning";
};
export type ArticleReviewProps = {
  isLoading: boolean;
};

export type ReviewsProps = {
  _id: string;
  title: string;
  rating: number;
  description: HTMLElement;
  articleId: {
    _id: string;
    title: string;
  };
  userId: {
    _id: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type Reviews = {
  _id: string;
  title: string;
  rating: number;
  description: ReactDOM ;
  articleId: string;
  userId: {
    _id: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type Article = {
  _id: string;
  title: string;
  image: url;
  description: ReactDOM;
  writer: string;
  reviews: Reviews[];
  category: String;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type ArticlesProps = {
  message: string;
  data: Article[];
  currentPage: number;
  nextPage: number;
  previoousPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  lastPage: number;
  total: number;
};
