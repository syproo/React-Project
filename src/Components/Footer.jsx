import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="w-[100%] p-4 bg-gray-800 font-font">
      <div className="flex flex-wrap p-4 border border-transparent shadow-md shadow-gray-400 rounded-lg">
        {/* Footer links */}
        <div className=" md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl text-yellow-300 font-bold underline">
            Explore
          </h4>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-white hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Featured Items
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Deals
              </a>
            </li>
          </ul>
        </div>

        {/* Footer links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl text-yellow-300 font-bold underline">About</h4>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-white hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl text-yellow-300 font-bold underline">
            Connect
          </h4>
          <div className="">
            <ul className="mt-2 flex flex-row gap-2 cursor-pointer transition duration-150 ease-out hover:ease-in">
              <li className="bg-blue-600 text-2xl text-white rounded-lg w-10 h-8-auto p-2 hover:animate-bounce">
                <BsFacebook />
              </li>
              <li className="bg-blue-400 text-2xl text-white rounded-lg w-10 h-8-auto p-2 hover:animate-bounce">
                <BsTwitter />
              </li>
              <li className="bg-pink-800 text-2xl text-white rounded-lg w-10 h-8-auto p-2 hover:animate-bounce">
                <BsInstagram />
              </li>
              <li className="bg-green-600 text-2xl text-white rounded-lg w-10 h-8-auto p-2 hover:animate-bounce">
                <BsWhatsapp />
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="w-full md:w-1/4">
          <h4 className="text-xl text-yellow-300 font-bold underline">
            Subscribe
          </h4>
          <p className="text-white mt-2">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-yellow-300 focus:outline-none focus:ring focus:ring-opacity-50"
            />
            <button
              type="submit"
              className=" mt-2 py-2 px-4 bg-gray-800 text-yellow-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-opacity-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#fff324] p-4 items-center text-center rounded-md text-lg font-semibold shadow-md shadow-gray-600 mt-2">
        <h1>Copyrights@ Developed By Coding Wizards</h1>
      </div>
    </div>
  );
};
