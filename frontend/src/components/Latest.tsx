import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";
import { Box } from "@mui/material";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
}

const Latest = () => {
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    return <div>Loading...</div>;
  }

  const { products } = shopContext;
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
    >
      {latestProducts.map((item, index) => (
        <ProductItems
          key={index}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          description={""}
          sizes={[]}
        />
      ))}
    </Box>
  );
};

export default Latest;
