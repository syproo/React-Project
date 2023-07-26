import { NavLink } from "react-router-dom";
import mensshoes from "../assets/category img/mensshoes.jpg";
import mensclothing from "../assets/category img/mensclothing.jpg";
import mensaccessories from "../assets/category img/mensaccessories.jpg";

export const Categories = () => {
  return (
    <div className="font-font">
    <div className="w-[100%] h-auto bg-gray-800 p-28">
      <h2 className="text-5xl text-center text-white font-semibold pb-2">
        Product Category
      </h2>
      <NavLink to={"/Products"}>
        <div className="flex  md:flex-row flex-col m-4  gap-8 p-4 justify-center items-center">
          <div className="flex-1 text-center max-w-sm overflow-hidden bg-gray-800 border rounded-lg shadow-md shadow-gray-600">
            <img
              className="rounded-t-sm transition duration-500 ease-in-out hover:scale-105"
              src={mensshoes}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-yellow-400">
                Mens Shoes
              </h5>
              <button className="rounded-lg p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black hover:text-lg hover:border-yellow-500">
                Browse More
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-sm text-center overflow-hidden bg-gray-800 border rounded-lg shadow-md shadow-gray-600">
            <img
              className="rounded-t-sm transition duration-500 ease-in-out hover:scale-105"
              src={mensclothing}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-yellow-400">
                Mens Clothing
              </h5>
              <button className=" rounded-lg p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black  hover:text-lg hover:border-yellow-500">
                Browse More
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-sm text-center overflow-hidden bg-gray-800 border rounded-lg shadow-md shadow-gray-600">
            <img
              className="rounded-t-sm transition duration-500 ease-in-out hover:scale-105"
              src={mensaccessories}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-yellow-400">
                Accessories
              </h5>
              <button className=" rounded-lg p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black hover:text-lg hover:border-yellow-500">
                Browse More
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
    </div>
  );
};
