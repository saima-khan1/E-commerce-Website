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
}

const Collection = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setAllProducts(products);
  });

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
                    <Checkbox /> Men
                  </MenuItem>
                  <MenuItem>
                    <Checkbox /> Women
                  </MenuItem>
                  <MenuItem>
                    <Checkbox /> Kids
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
                    <Checkbox /> Topwear
                  </MenuItem>
                  <MenuItem>
                    <Checkbox /> Bottomwear
                  </MenuItem>
                  <MenuItem>
                    <Checkbox /> Winterwear
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
      </Box>
    </>
  );
};

export default Collection;
