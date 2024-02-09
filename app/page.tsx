import AboutUs from "@/components/AboutUs";
// import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Product";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <Announcement /> */}
      <Hero />
      <Products />
      <AboutUs />
      <Testimonial />
      <Footer />
    </div>
  );
}
