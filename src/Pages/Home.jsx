import { Navbar } from "../Components/Navbar";
import { Banner } from "../Components/Banner";
import { BannerFooter } from "../Components/BannerFooter";
import { Catagories } from "../Components/Catagories";

export const Home = () => {
  return (
    <>
    
      <Navbar />
      <Banner />
      <BannerFooter/>
      <Catagories/>
  
    </>
  );
};
