"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Details of product with id {productId}</h1>
      <Button className="bg-red-700">Click here for more details</Button>
    </div>
  );
};

export default ProductPage;
