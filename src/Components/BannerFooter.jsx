export const BannerFooter = () => {
  return (
    <div className="w-[100%] h-auto relative top-16 bg-[#fff324] p-10 font-font">
      <div className="  flex md:flex-row flex-col text-center justify-around cursor-pointer ">
        <div className="border-transparent shadow-md rounded-md p-4 shadow-gray-700 bg-gray-800 hover:animate-bounce">
          <h1 className="text-lg font-bold text-white">Buy & sell almost anything</h1>
          <h3 className="text-md text-[#fff324]">
            Shop and sell new, like-new, and preowned items.
          </h3>
          <h2 className="text-lg font-bold underline text-white">SIGN UP</h2>
        </div>
        <div className="border-transparent shadow-md rounded-md p-4 shadow-gray-700 bg-gray-800 hover:animate-bounce">
          <h1 className="text-lg font-bold text-white">Goodbye clutter</h1>
          <h3 className="text-md text-[#fff324]">
            Earn extra cash by selling unwanted gifts and items.
          </h3>
          <h2 className="text-lg font-bold underline text-white">LIST AN ITEM</h2>
        </div>
        <div className="border-transparent shadow-md rounded-md p-4 shadow-gray-700 bg-gray-800 hover:animate-bounce">
          <h1 className="text-lg font-bold text-white">Save up to 70% off retail</h1>
          <h3 className="text-md text-[#fff324]">
            Get access to exclusive promos & flash deals.
          </h3>
          <h2 className="text-lg font-bold underline text-white">SHOP DEALS</h2>
        </div>
      </div>
    </div>
  );
};
