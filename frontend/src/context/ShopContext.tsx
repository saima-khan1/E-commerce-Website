import { createContext, ReactNode, useEffect, useState } from "react";
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
  cartItems: {
    [itemId: string]: {
      [size: string]: number;
    };
  };
  addToCart: (itemId: string, size: string) => void;
}
export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "$",
  delivery_fee: 10,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  cartItems: {},
  addToCart: () => {},
});
interface ShopProviderProps {
  children: ReactNode;
}

const ShopContextProvider = ({ children }: ShopProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState(" ");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState<{
    [itemId: string]: {
      [size: string]: number;
    };
  }>({});

  const addToCart = async (itemId: string, size: string): Promise<void> => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  useEffect(() => {
    console.log("Cart Items:", JSON.stringify(cartItems, null, 2));
  }, [cartItems]);
  const value: ShopContextType = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
