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

import { Box, Button, Divider, Typography } from "@mui/material";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  sizes: string[];
  date: number;
  category: string;
  subCategory: string;
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState("");

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
          <Box>
            <img src={assets.star_icon} />
            <img src={assets.star_icon} />
            <img src={assets.star_icon} />
            <img src={assets.star_icon} />
            <img src={assets.star_dull_icon} />
            <Typography variant="h4">(122)</Typography>
          </Box>
          <Typography variant="h4" fontWeight={"600"}>
            {" "}
            {currency}
            {productDetails.price}
          </Typography>

          <Typography variant="h5" color="gray" width={"600px"}>
            {" "}
            {productDetails.description}
          </Typography>
          <Typography variant="h5" color="gray" width={"600px"}>
            Select size
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              padding: "20px",
            }}
          >
            {productDetails.sizes.map((item, index) => (
              <Button
                onClick={() => setSize(item)}
                variant="outlined"
                sx={{ backgroundColor: "gray-100" }}
                key={index}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Button
            onClick={() => addToCart(productDetails._id, size)}
            variant="contained"
            sx={{
              width: "200px",
              height: "60px",
              marginBottom: "27px",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Add to Cart
          </Button>
          <Divider sx={{ marginBottom: "27px" }} />
          <Box>
            <Typography variant="h5" color="gray">
              100% Original product.
            </Typography>
            <Typography variant="h5" color="gray">
              Cash on delivery is available on this product.
            </Typography>
            <Typography variant="h5" color="gray">
              Easy return and exchange policy within 7 days.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              p: 2,

              border: "1px solid black",

              gap: 2,
              width: 100,
              height: 30,
            }}
          >
            Description
          </Box>
          <Box
            sx={{
              p: 2,

              border: "1px solid black",

              gap: 2,
              width: 100,
              height: 30,
            }}
          >
            Reviews (122)
          </Box>
        </Box>

        <Box
          sx={{
            p: 2,

            border: "1px solid black",

            gap: 2,
            width: 1000,
            height: 300,
          }}
        >
          <Typography>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </Typography>
          <Typography>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </Typography>
        </Box>
        <RelatedProducts
          category={productDetails.category}
          subCategory={productDetails.subCategory}
        />
      </Box>
    </>
  );
};

export default ProductDetail;
