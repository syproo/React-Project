import { NavLink } from "react-router-dom";
import Bannerimg from "../assets/banner.jpg";
export const Banner = () => {
  return (
    <div className="relative top-16">
      <div className="font-font max-w-[100vw] h-auto">
        <div className="overflow-hidden bg-contain bg-no-repeat bg-[#66665f]">
          <img
            className="object-fit w-[100%] h-[100%]"
            src={Bannerimg}
            alt=""
          />
        </div>
        <div className="flex flex-col  absolute top-12 left-20 p-2 md:top-24 lg:top-40">
          <h1 className="text-3xl  font-semibold lg:text-5xl">
            Preowned is the
          </h1>
          <h1 className="text-3xl font-semibold mb-4 lg:text-5xl ">
            new this year
          </h1>
          <input
            className="w-[250px] text-sm lg:text-lg lg:w-[480px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            placeholder="Shop one-of-a-kind finds"
            type="text"
            name="search"
          />
          <NavLink to={"/Products"}>
            <div className=" text-sm flex gap-0 mt-4 flex-row lg:text-lg lg:gap-4 ">
              <button className=" rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black">
                Mens Shoes
              </button>
              <button className="rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black ">
                Mens Clothing
              </button>
              <button className="rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black">
                Mens Accessories
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
