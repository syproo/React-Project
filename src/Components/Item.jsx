import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export const Item = ({ data, addToCart }) => {
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal();
  };
  // eslint-disable-next-line react/prop-types
  const { id, img, name, price } = data;

  return (
    <>
      <div>
        <div className=" max-w-sm p-2 text-center text-black border border-yellow-400 rounded-lg shadow-lg shadow-gray-800 bg-white font-font">
          <div className="overflow-hidden bg-contain bg-no-repeat shadow-md shadow-gray-800 rounded-lg">
            <img
              onClick={() => {
                setModal(true);
              }}
              className="object-fit w-96 h-80 rounded-lg transition duration-500 ease-in-out hover:scale-105"
              src={img}
              alt=""
            />
          </div>
          <div className="text-lg font-bold underline p-2">{name}</div>
          <div className="text-md font-semibold">
            <span>Rs : {price}</span>
          </div>
          <div className=" ">
            <div className="p-2">
              <button
                onClick={addToCart}
                className=" rounded-lg p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black hover:border-yellow-500"
              >
                <a className="flex gap-2 items-center ">
                  Add to Cart{" "}
                  <span className="text-xl">
                    <BsCartPlus />
                  </span>
                </a>
              </button>
            </div>
            <div className="rounded-lg p-2 border text-bold text-white bg-gray-800 shadow-md shadow-gray-800 hover:bg-yellow-300 hover:text-black hover:border-yellow-500">
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                Product Description....
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Modal Code*/}

      {modal && (
        <div className="flex flex-col justify-center items-center content-center w-[100vw] h-[100vh] fixed top-0 left-0 bottom-0 right-0  bg-gray-900/90">
          <h1 className="text-white text-4xl font-bold p-2 my-2">
            Product Description
          </h1>
          <div className="max-w-[100vw] h-auto lg:grid  lg:grid-flow-col flex flex-col flex-wrap md:flex-col  gap-0 lg:gap-6 p-4 items-center justify-center content-center w-[80vw] rounded-md bg-[#fff324] border border-white shadow-lg shadow-white/50">
            <div className="rounded-md overflow-hidden row-span-4">
              <img
                className=" object-contain overflow-hidden max-w-[100%] h-[250px] md:h-[300px] transition duration-500 ease-in-out hover:scale-105"
                src={img}
                alt=""
              />
            </div>
            <div className="col-span-2 text-2xl lg:text-4xl font-bold underline">
              <h1>{name}</h1>
            </div>
            <div className="col-span-2">
              <p className="text-md lg:text-lg font-normal">
                <span className="text-xl lg:text-2xl font-semibold">
                  Description :
                </span>
                <br />
                In publishing and graphic design,
                <br /> Lorem ipsum is a placeholder text commonly used to
                demonstrate the
              </p>
            </div>
            <div className="col-span-2 text-lg lg:text-xl font-bold ">
              <span className="text-gray-800">Rs : {price}</span>
            </div>
            <div className="col-span-2 space-x-8">
              <button
                onClick={() => closeModal(false)}
                className="text-sm lg:text-lg rounded-xl p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black"
              >
                Back To Products
              </button>
              <button
                onClick={addToCart}
                className="text-sm lg:text-lg rounded-xl p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black"
              >
                <a className="flex items-center gap-2">
                  Add to Cart{" "}
                  <span className="text-xl">
                    <BsCartPlus />
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
