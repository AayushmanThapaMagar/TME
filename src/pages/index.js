import { NavBar } from "@/components/navbar";
// import { CaptionCarousel } from "@/components/carousel";
import { FooterComponent } from "@/components/footer";
import { FeaturedProducts } from "@/components/featuredProduct";
import { GridBlurredBackdrop } from "@/components/testemonials";
import { SplitScreen } from "@/components/hero";

export default function Main() {
  return (
    <>
    <div
      style = {{
        backgroundColor: '#f7f3f0',
      }}
    >
    <NavBar />
    <SplitScreen />
    <FeaturedProducts />

    <GridBlurredBackdrop />
    <FooterComponent />
    </div>
    </>
  )
}