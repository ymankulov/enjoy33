import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct} from "../../redux/reducers/productSlice";
import ProductCard from "../ProductCard";

const Product = () => {
  const { product } = useSelector((s) => s.allProduct);
  const dispatch = useDispatch();
  const getAllProduct = () => {
    return async (dispath) => {
      const res = await axios(`https://fakestoreapi.com/products`);
      const { data } = res;
      dispatch(getProduct(data));
    };
  };
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  console.log(product);

  return (
    <div>
      <div className="container">
        <div className="flex items-center gap-15 flex-wrap">
          {product.map((el) => (
            <ProductCard {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
