import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Checkbox from "@mui/material/Checkbox";
import ProductItems from "../components/ProductItems";
import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  MenuItem,
  Typography,
} from "@mui/material";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
}

const Collection = () => {
  const { products } = useContext(ShopContext);

  // const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filterProducts, setfilterProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setfilterProducts(productsCopy);
  };
  useEffect(() => {
    applyFilters();
  }, [category, subCategory]);

  return (
    <>
      <Box display="flex">
        <Box marginTop={"30px"} marginLeft={"40px"}>
          <Typography variant="h4" fontWeight={"600"}>
            Filters
          </Typography>
          <Box marginTop={"30px"}>
            <Card sx={{ minWidth: 400 }}>
              <CardContent>
                <Typography variant="h5" marginLeft={"20px"} fontWeight={"600"}>
                  CATEGORIES
                </Typography>
                <List>
                  <MenuItem>
                    <Checkbox value="Men" onChange={toggleCategory} /> Men
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="Women" onChange={toggleCategory} /> Women
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="Kids" onChange={toggleCategory} /> Kids
                  </MenuItem>
                </List>
              </CardContent>
            </Card>
          </Box>
          <Box marginTop={"30px"}>
            <Card sx={{ minWidth: 400 }}>
              <CardContent>
                <Typography variant="h5" marginLeft={"20px"} fontWeight={"600"}>
                  TYPE
                </Typography>
                <List>
                  <MenuItem>
                    <Checkbox value="Topwear" onChange={toggleSubCategory} />{" "}
                    Topwear
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="bottomwear" onChange={toggleSubCategory} />{" "}
                    Bottomwear
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="Winterwear" onChange={toggleSubCategory} />{" "}
                    Winterwear
                  </MenuItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {filterProducts.map((item, index) => (
            <ProductItems
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Collection;
