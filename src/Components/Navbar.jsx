import { BsBell, BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ cartItemCount }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-[100%] font-font">
        <div className="flex w-full justify-between items-center p-4 bg-gray-800 text-white cursor-pointer ">
          <NavLink to={"/"} className="w-52">
            <img src={logo} alt="" />
          </NavLink>

          <div className=" bg-gray-800 z-10 left-0 w-full transition-all duration-500 ease-in-out top-8 p-2 flex-row flex items-center justify-end gap-8 font-font text-lg ">
            <NavLink to={"/Signup"}>
              <button className="hover:border-b-2 hover:border-yellow-400">
                Sign up
              </button>
            </NavLink>
            <NavLink to={"/Login"}>
              <button className="hover:border-b-2 hover:border-yellow-400">
                Log in
              </button>
            </NavLink>

            <i className="text-xl hover:border-b-2 hover:border-yellow-400">
              <BsBell />
            </i>
            <NavLink to={"/Cart"}>
              <i className="text-2xl hover:border-b-2 hover:border-yellow-400">
                <BsCart3 />
              </i>
              {cartItemCount > 0 && (
                <div className="text-sm text-center translate-x-4 text-gray-800 font-bold absolute top-4 px-2 border border-white rounded-full bg-yellow-400">
                  {cartItemCount < 9 ? cartItemCount : "9 +"}
                </div>
              )}
            </NavLink>
            <button className="border-2 border-yellow-400 bg-gray-600 text-white p-1 rounded-lg hover:bg-yellow-300 hover:text-black">
              List an item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
