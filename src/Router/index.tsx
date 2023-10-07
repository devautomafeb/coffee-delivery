import { Route, Routes } from "react-router-dom";
import { Home } from "../views/pages/Home";
import { Checkout } from "../views/pages/Checkout";
import { CheckoutFilled } from "../views/pages/CheckoutFilled";
import { Success } from "../views/pages/Success";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutfilled" element={<CheckoutFilled />} />
            <Route path="/Success" element={<Success />} />
        </Routes>
    )
}