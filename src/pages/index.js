// import { NavBar } from "@/components/constants/navbar";
import { NavBar } from "../components/constants/navbar";
// import { CaptionCarousel } from "@/components/carousel";
import { FooterComponent } from "@/components/constants/footer";
import { FeaturedProducts } from "@/landingPage/featuredProduct";
import { GridBlurredBackdrop } from "@/landingPage/testemonials";
import { SplitScreen } from "@/landingPage/hero";

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