import Hero from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hooks/useTitle";
export const HomePage = () => {
  useTitle("Home");
  return (
    <main className=" w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
