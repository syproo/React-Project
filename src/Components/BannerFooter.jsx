export const BannerFooter = () => {
  return (
    <div className="absolute w-full bottom-0 bg-[#fff324] p-4">
      <div className="flex flex-col md:flex-row lg:flex-row text-center justify-between p-6">
        <div>
          <h1 className="text-lg font-bold">Buy & sell almost anything</h1>
          <h3 className="text-lg ">
            Shop and sell new, like-new, and preowned items.
          </h3>
          <h2 className="text-lg font-bold underline">SIGN UP</h2>
        </div>
        <div>
          <h1 className="text-lg font-bold">Goodbye clutter</h1>
          <h3 className="text-lg ">
            Earn extra cash by selling unwanted gifts and items.
          </h3>
          <h2 className="text-lg font-bold underline">LIST AN ITEM</h2>
        </div>
        <div>
          <h1 className="text-lg font-bold">Save up to 70% off retail</h1>
          <h3 className="text-lg ">
            Get access to exclusive promos & flash deals.
          </h3>
          <h2 className="text-lg font-bold underline">SHOP DEALS</h2>
        </div>
      </div>
    </div>
  );
};
