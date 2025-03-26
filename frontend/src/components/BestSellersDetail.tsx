import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Product from "../pages/Product";
import ProductItems from "./ProductItems";
import { Box } from "@mui/material";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  bestseller: boolean;
}

const BestSellersDetail = () => {
  const { products } = useContext(ShopContext);

  const [bestSeller, SetBestSellers] = useState<Product[]>([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    SetBestSellers(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
    >
      {bestSeller.map((item, index) => (
        <ProductItems
          key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </Box>
  );
};

export default BestSellersDetail;
