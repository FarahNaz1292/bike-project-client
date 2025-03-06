import ClientTestimonials from "@/Components /HomePage/ClientTestimonials";
import HeroSection from "@/Components /HomePage/HeroSection";
import Products from "@/Components /HomePage/Products";
import ServiceCounter from "@/Components /HomePage/ServiceCounter";
import ServiceSection from "@/Components /HomePage/ServiceSection";
import WhyChooseUs from "@/Components /HomePage/WhyChooseUs";


export default function Home() {
  return (
   <>
 <HeroSection/>
 <ServiceSection/>
 <Products/>
 <ServiceCounter/>
 <WhyChooseUs/>
 <ClientTestimonials/>
   </>
  );
}
