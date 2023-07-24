import { NavLink } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="font-font min-w-fit w-full">
      <div
        className="w-full h-[95vh] bg-no-repeat bg-contain bg-[#fff324]"
        style={{ backgroundImage: `url(src/assets/banner.jpg)` }}
      ></div>
      <div className="flex flex-col  absolute top-24 left-20 p-2 lg:top-52">
        <h1 className="text-4xl  font-semibold lg:text-5xl">Preowned is the</h1>
        <h1 className="text-4xl font-semibold mb-4 lg:text-5xl ">new this year</h1>
        <input
          className="w-[300px] lg:w-[480px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-full py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Shop one-of-a-kind finds"
          type="text"
          name="search"
        />
        <NavLink to={"/Products"}>
        <div className=" text-sm   flex  gap-0 mt-4 lg:text-lg lg:gap-4 ">
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
  );
};
