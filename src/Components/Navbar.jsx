import { BsBell, BsCart3 } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4 w-full bg-gray-800 text-white cursor-pointer ">
      <div className="w-52">
        <img src="src/assets/logo.png" alt="" />
      </div>
      <div className="flex items-center justify-end gap-6 font-font text-lg">
        <button>Sign up</button>
        <button>Log in</button>
        <i className="text-xl">
          <BsBell />
        </i>
        <i className="text-xl">
          <BsCart3 />
        </i>
        <button>List an item</button>
      </div>
    </div>
  );
};
