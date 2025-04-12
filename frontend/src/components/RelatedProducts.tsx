import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Box, Typography } from "@mui/material";
import ProductItems from "./../components/ProductItems";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
}

interface RelatedProductsProps {
  category: string;
  subCategory: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  category,
  subCategory,
}) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelatedProducts(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <>
      <Typography variant="h4">Related products</Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {relatedProducts.map((item, index) => (
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
    </>
  );
};

export default RelatedProducts;
