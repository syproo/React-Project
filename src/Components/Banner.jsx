export const Banner = () => {
  return (
    <div className="h-full">
      <div className="absolute">
        <img className="w-screen h-3/4 " src="src/assets/banner3.jpg" alt="" />
      </div>
      <div className="flex flex-col  w-2/5 h-96 mt-32 pl-32 absolute">
        <h1 className="text-4xl">Preowned is the new</h1>
        <h1 className="text-4xl mb-4">new this year</h1>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Shop one-of-a-kind finds"
          type="text"
          name="search"
        />
        <div className="text-lg  flex gap-4 mt-4">
          <button className="rounded-full p-2 border-2 border-white text-white bg-pink-600 hover:bg-pink-900  focus:outline-none focus:ring focus:ring-black">Retro Video Games</button>
          <button className="rounded-full p-2 border-2 border-white text-white bg-pink-600 hover:bg-pink-900  focus:outline-none focus:ring focus:ring-black ">Organizers</button>
          <button className="rounded-full p-2 border-2 border-white text-white bg-pink-600 hover:bg-pink-900  focus:outline-none focus:ring focus:ring-black">Workout gear</button>
        </div>
      </div>
    </div>
  );
};
