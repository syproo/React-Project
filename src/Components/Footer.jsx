export const Footer = () => {
  return (
    <div className="w-[100%] p-8 bg-yellow-400">
      <div className="flex flex-wrap ">
        {/* Footer links */}
        <div className=" md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl text-black font-bold underline">Explore</h4>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-black hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">
                Featured Items
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">
                Deals
              </a>
            </li>
          </ul>
        </div>

        {/* Footer links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl text-black font-bold underline">About</h4>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-black hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl text-black font-bold underline">Connect</h4>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-black hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="w-full md:w-1/4">
          <h4 className="text-xl text-black font-bold underline">Subscribe</h4>
          <p className="text-black mt-2">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-opacity-50"
            />
            <button
              type="submit"
              className=" mt-2 py-2 px-4 bg-gray-800 text-yellow-400 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-opacity-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
