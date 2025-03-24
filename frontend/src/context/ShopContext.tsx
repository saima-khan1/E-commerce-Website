import { createContext, ReactNode } from "react";
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
}
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  delivery_fee: 10,
});
interface ShopProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;
  const value: ShopContextType = { products, currency, delivery_fee };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
