import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";
import { Box } from "@mui/material";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
}

const Collection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    setAllProducts(products);
  });

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
    >
      {allProducts.map((item, index) => (
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

export default Collection;
