import { useState } from "react";

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
        <div className=" max-w-sm text-center text-white bg-white border border-yellow-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="overflow-hidden bg-contain bg-no-repeat">
            <img
              className="object-fit w-96 h-80 rounded-t-lg transition duration-500 ease-in-out hover:scale-105"
              src={img}
              alt=""
            />
          </div>
          <div>{name}</div>
          <div>
            <span>Rs : {price}</span>
          </div>
          <div className="p-5">
            <button
              onClick={addToCart}
              className=" rounded-full p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-300 hover:text-black hover:border-yellow-500"
            >
              Add to Cart
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              See More
            </button>
          </div>
        </div>
      </div>

      {/*Modal Code*/}

      {modal && (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bottom-0 right-0  bg-gray-800/80  justify-center content-center grid">
          <h1 className="text-white text-4xl font-bold p-2 my-2">
            Product Description
          </h1>
          <div className="border-2 border-white  grid grid-rows grid-flow-col gap-6 p-4 items-center justify-center content-center w-[80vw] h-[80vh] bg-yellow-400 shadow-xl shadow-gray-500/50">
            <div className="w-[400px] h-auto row-span-4">
              <img
                className="object-contain object-center transition duration-500 ease-in-out hover:scale-105"
                src={img}
                alt=""
              />
            </div>
            <div className="col-span-2 text-4xl font-bold underline">
              <h1>{name}</h1>
            </div>
            <div className="col-span-2">
              <p className="text-lg font-normal">
                <span className="text-2xl font-semibold">Description :</span>
                <br />
                In publishing and graphic design,
                <br /> Lorem ipsum is a placeholder text commonly used to
                demonstrate the
              </p>
            </div>
            <div className="col-span-2 text-xl font-bold">
              <span className="text-gray-800">Rs : {price}</span>
            </div>
            <div className="col-span-2 space-x-8">
              <button
                onClick={() => closeModal(false)}
                className="rounded-xl p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black"
              >
                Back To Products
              </button>
              <button
                onClick={addToCart}
                className="rounded-xl p-2 border-2 border-white text-white bg-gray-800 hover:bg-yellow-400 hover:text-black  focus:outline-none focus:ring focus:ring-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
