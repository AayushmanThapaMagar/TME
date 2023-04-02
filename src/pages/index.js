import { NavBar } from "@/components/navbar";
import { CaptionCarousel } from "@/components/carousel";
import { FooterComponent } from "@/components/footer";
import { ProductSimple } from "@/components/products";
import { GridBlurredBackdrop } from "@/components/testemonials";
import { Heading, Box } from "@chakra-ui/react";

export default function Main() {
  return (
    <>
    <div
      style = {{
        backgroundColor: '#f9f9f9',
      }}
    >
    <NavBar />
    <CaptionCarousel />
    <div
    style = {{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }}
    >
    <ProductSimple />
    <ProductSimple />
    <ProductSimple />
    </div>

    <GridBlurredBackdrop />
    <FooterComponent />
    </div>
    </>
  )
}