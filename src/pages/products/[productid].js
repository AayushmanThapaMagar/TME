import { NavBar } from "@/components/constants/navbar";
import { useRouter } from "next/router";
import swell from "@/utils/swell";
import { useEffect, useState } from "react";
import { InfoProductDetails } from "@/components/products/productdetails";

export default function ProductDetails() {
  const router = useRouter();
  const productid = router.query.productid;
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await swell.get(`/products/${productid}`, {});
        if (response === null) {
            await new Promise(resolve => setTimeout(resolve, 10));
        } else {
            setProductDetails(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [productid]);

  console.log(productDetails)

  return (
    <>
      <title>Product Details</title>
      <NavBar />
      {productDetails && (
        <InfoProductDetails product={productDetails} />
      )}
    </>
  );
}
