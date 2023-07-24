import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ShippingCharges = 25;
export const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const cartTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  const round = (value, decimals) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  };

  return (
    <div className="">
      <div className="">
        {cart.length >= 1 ? (
          <div className="flex w-[100vw] h-[90vh] content-center items-center justify-around bg-yellow-400">
            <div className="w-[50vw] border rounded-lg bg-white shadow-lg shadow-gray-800 p-4">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              {cart.map((item) => (
                <div className="py-1" key={item.product.id}>
                  <div className="flex gap-4 items-center content-center justify-center p-4 rounded-lg border shadow-md shadow-gray-800 ">
                    <div className="w-40 overflow-hidden rounded-md ">
                      <img src={item.product.img} alt="" />
                    </div>
                    <div className=" ">
                      <div className=" text-lg font-bold ">
                        <Link to={"" + item.product.id} className="">
                          {item.product.name}
                        </Link>
                      </div>
                      <span className="text-md font-semibold">
                        Rs- {round(item.product.price * item.quantity, 2)}.00
                      </span>
                      {/* <div className="remove">Remove</div> */}
                    </div>
                    <div className="w-[250px] flex items-center justify-around">
                      <div className="space-x-2 flex">
                        <div className="space-x-2 bg-gray-800 border rounded-md shadow-md shadow-gray-700">
                          <button
                            onClick={() => increaseQuantity(item.product.id)}
                            className="text-lg rounded-lg p-2 border text-white bg-green-500 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-gray-800"
                          >
                            +
                          </button>
                          <span className="text-lg rounded-lg p-2 border-2 border-gray-800 text-black bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => decreaseQuantity(item.product.id)}
                            className="text-lg rounded-lg p-2 cursor-pointer border text-white bg-red-500 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-gray-800"
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <span>X</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-80 h-96 content-center items-center justify-center p-2 border-2 bg-white rounded-md shadow-md shadow-gray-700">
              <h2 className="text-2xl py-2 font-bold underline">
                Payment Summary{" "}
              </h2>
              <div className="p-2 space-y-2">
                <div className="flex font-semibold rounded-md border p-2 justify-between shadow-md shadow-gray-700">
                  <span>Subtotal:</span>
                  <span className=" ">Rs- {round(cartTotal(), 2)}.00</span>
                </div>
                <div className="flex font-semibold rounded-md border p-2 justify-between shadow-md shadow-gray-700">
                  <span>Shipping Charges:</span>
                  <span className=""> Rs- {ShippingCharges}.00</span>
                </div>
                <div className="flex font-semibold rounded-md border p-2 justify-between shadow-md shadow-gray-700">
                  <span>Total Amount : </span>
                  <span className="">
                    Rs- {round(cartTotal() + ShippingCharges, 2)}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 w-[100%] h-[90vh]  items-center content-center justify-center bg-yellow-400">
            <div className="text-6xl font-bold">
              <p>&#9432;Your Cart is empty</p>
            </div>
            <div>
              <Link to={"/Products"}>
                <button className="text-xl font-bold border-2 border-gray-800 bg-yellow-400 text-black p-4 rounded-lg hover:bg-gray-800 hover:text-white">
                  Back To Shopping{" "}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
