import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
interface Props {
  id: string;
  image: string[];
  name: string;
  price: number;
}
const ProductItems: React.FC<Props> = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Box>
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={image[0]} alt="image" />
        <p>{name}</p>
        <p>
          {currency}
          {price}
        </p>
      </Link>
    </Box>
  );
};

export default ProductItems;
