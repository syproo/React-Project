export const Banner = () => {
  return (
    <div className="font-font w-full">
      <div
        className="w-full h-screen bg-no-repeat bg-contain "
        style={{ backgroundImage: `url(src/assets/banner.jpg)` }}
      ></div>
      <div className="flex flex-col shrink absolute top-52 left-20 p-2">
        <h1 className="text-5xl font-semibold">Preowned is the</h1>
        <h1 className="text-5xl font-semibold mb-4">new this year</h1>
        <input
          className="w-[480px] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-full py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Shop one-of-a-kind finds"
          type="text"
          name="search"
        />
        <div className=" text-lg  flex  gap-4 mt-4">
          <button className=" rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black  focus:outline-none focus:ring focus:ring-black">
            Retro Video Games
          </button>
          <button className="rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black  focus:outline-none focus:ring focus:ring-black ">
            Organizers
          </button>
          <button className="rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black  focus:outline-none focus:ring focus:ring-black">
            Workout gear
          </button>
        </div>
      </div>
    </div>
  );
};
