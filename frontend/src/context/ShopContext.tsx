import { createContext, ReactNode, useState } from "react";
import { products } from "../assets/assets";

interface ShopContextType {
  products: {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
  }[];
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: (value: string) => void;
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
}
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  delivery_fee: 10,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
});
interface ShopProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState(" ");
  const [showSearch, setShowSearch] = useState(true);

  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
