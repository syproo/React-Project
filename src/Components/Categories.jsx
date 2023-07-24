import { NavLink } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="w-[100%] h-[600px] bg-gray-800 p-8">
      <h2 className="text-5xl text-center text-white font-semibold pb-2">
        Product Category
      </h2>
      <NavLink to={"/Products"}>
        <div className="flex  m-4  gap-8 p-4 justify-center overflow-hidden">
          <div className="flex-1 max-w-sm text-center bg-white border border-yellow-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-sm transition duration-500 ease-in-out hover:scale-105"
              src="src\assets\category img\mensshoes.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-yellow-400">
                Mens Shoes
              </h5>
              <button className="rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black hover:text-lg hover:border-yellow-500">
                Browse More
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-sm text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-sm transition duration-500 ease-in-out hover:scale-105"
              src="src\assets\category img\mensclothing.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-yellow-400">
                Mens Clothing
              </h5>
              <button className=" rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black  hover:text-lg hover:border-yellow-500">
                Browse More
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-sm text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-sm transition duration-500 ease-in-out hover:scale-105"
              src="src\assets\category img\mensaccessories.jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-yellow-400">
                Accessories
              </h5>
              <button className=" rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black hover:text-lg hover:border-yellow-500">
                Browse More
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
