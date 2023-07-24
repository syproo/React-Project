import { Item } from "../Components/Item";
import productData from "../Context/Productdata";
import {useCart}  from "../Context/CartContext";

export const Products = () => {
  const { products } = productData;
  const { addToCart } = useCart( );

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-6 justify-items-center bg-yellow-400">
        {products.map((product) => (
          <Item
            key={product.id}
            data={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};
