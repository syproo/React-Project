import { Navbar } from "../Components/Navbar";
import { Banner } from "../Components/Banner";
import { BannerFooter } from "../Components/BannerFooter";
import { Catagories } from "../Components/Catagories";
import { Footer } from "../Components/Footer";


export const Home = () => {
  return (
    <>

      <Navbar />
      <Banner />
      <BannerFooter />
      <Catagories />
      <Footer />

    </>
  );
};
