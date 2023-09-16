import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  useTitle("Cart")
  const { cartList } = useCart();
  return (
    <main>
      <div className=" ">
        {cartList.length ? <CartList /> : <CartEmpty />}
      </div>
    </main>
  );
};
