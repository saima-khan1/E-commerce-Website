// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// interface Item {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string[];

//   sizes: string[];
// }

// const Product = () => {
//   const { productId } = useParams();
//   const { products } = useContext(ShopContext);
//   const [productDetails, setProductDetails] = useState<Item[]>([]);
//   const [image, setImage] = useState<string>("");
//   const fetchProductDetails = async () => {
//     products.map((item) => {
//       if (item._id === productId) {
//         setProductDetails(item);
//         setImage(item.image[0]);

//         console.log(item);
//         return null;
//       }
//     });
//   };
//   useEffect(() => {
//     fetchProductDetails();
//   }, [productId]);

//   return productDetails ? (
//     <div>
//       {productDetails.image.map((item, index) => {
//         <img src={item} key={index} />;
//       })}
//     </div>
//   ) : (
//     <div>error</div>
//   );
// };

//  export default Product;
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";
import { Box, Typography } from "@mui/material";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  sizes: string[];
  date: number;
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useContext(ShopContext);
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const fetchProductDetails = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductDetails(product);
        setImage(product.image[0]);
      }
    };

    fetchProductDetails();
  }, [productId, products]);

  if (!productDetails) {
    return <div>Error: Product not found</div>;
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {productDetails.image.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              onClick={() => setImage(imgSrc)}
              alt={`${name} image ${index + 1}`}
              style={{ width: "100px", margin: "5px" }}
            />
          ))}
        </Box>

        <img src={image} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" fontWeight={"600"}>
            {" "}
            {productDetails.name}
          </Typography>
          <Typography variant="h4" fontWeight={"600"}>
            {" "}
            ${productDetails.price}
          </Typography>

          <Typography variant="h5" color="gray">
            {" "}
            {productDetails.description}
          </Typography>
        </Box>
      </Box>

      {/* <ProductItems
          id={productDetails._id}
          image={productDetails.image}
          name={productDetails.name}
          price={productDetails.price}
          description={productDetails.description}
          sizes={productDetails.sizes}
        /> */}
    </>
  );
};

export default ProductDetail;
