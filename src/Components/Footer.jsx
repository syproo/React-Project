
import "./catagories.css"




export const Footer = () => {

    return (
        <footer className="footer ">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* Footer links */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-white font-bold">Explore</h4>
                        <ul className="mt-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Categories</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Featured Items</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Deals</a></li>
                        </ul>
                    </div>

                    {/* Footer links */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-white font-bold">About</h4>
                        <ul className="mt-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Social links */}
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="text-white font-bold">Connect</h4>
                        <ul className="mt-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Newsletter subscription */}
                    <div className="w-full md:w-1/4">
                        <h4 className="text-white font-bold">Subscribe</h4>
                        <p className="text-gray-300 mt-2">Subscribe to our newsletter to get the latest updates.</p>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-opacity-50"
                            />
                            <button
                                type="submit"
                                className="mt-2 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-opacity-50"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

