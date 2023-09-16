import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useTitle } from "../../hooks/useTitle";

export const OrderPage = () => {
  const { state } = useLocation();
  useTitle("Order");
  return (
    <main className=" w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
