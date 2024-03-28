import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Hotsales from "../components/Hotsales";
import OffersEq from "../components/OffersEq";
import OffersApp from "../components/OffersApp";
import Productslider from "../components/Productslider";
export default function Home() {
  return (
    <>
      <Header />
      <Slider className="z-0" />

      <Hotsales />
      <OffersEq />
      <Productslider />
      <OffersApp />
      <Footer />
    </>
  );
}
