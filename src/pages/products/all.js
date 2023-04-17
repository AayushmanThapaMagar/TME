// import {swell } from '@/utils/swell';
import { NavBar } from "@/components/constants/navbar";
import { FooterComponent } from '@/components/constants/footer';
import { AllProducts } from '@/components/products/allProducts';

export default function products() {
    return (
        <>
        <title>Products</title>
        {/* <NavBar /> */}

        <AllProducts />
        <FooterComponent />
        </>
    )
}