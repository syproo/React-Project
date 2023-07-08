
import { BsBell,BsCart3 } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4 w-full ">
    <div className="">
      <h2>Mercari</h2>
    </div>
    <div className="flex items-center justify-end gap-4 px-4">
        <button>Sign up</button>
        <button>Log in</button>
        <i><BsBell/></i>
        <i><BsCart3/></i>
        <button>List an item</button>
        
    </div>
    </div>
  );
};
