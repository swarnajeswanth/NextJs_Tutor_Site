import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LeadForm from "./components/Leadform";
import HowItWorks from "./components/Howitworks";
import Programs from "./components/Programs";
import StatsBar from "./components/Statsbar";
import Testimonials from "./components/Testimonials";
import WhyAccredian from "./components/Whyaccredian";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <Hero/>
      <StatsBar/>
      <Programs/>
      <Testimonials/>
      <HowItWorks/>
      <LeadForm/>
      <WhyAccredian/>
      <Footer/>
    </div>
  );
}
