"use client";
import { useParams } from "next/navigation";
const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Details of product with id {productId}</h1>
    </div>
  );
};

export default ProductPage;
