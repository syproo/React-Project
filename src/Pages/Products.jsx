import { Item } from "../Components/Item";
import productData from "../Context/Productdata";
import { useCart } from "../Context/CartContext";
import { Footer } from "../Components/Footer";

export const Products = () => {
  const { products } = productData;
  const { addToCart } = useCart();

  return (
    <>
      <div className="relative top-18 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 p-8 justify-items-center items-center content-center bg-[#fff324]">
          {products.map((product) => (
            <Item
              key={product.id}
              data={product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
