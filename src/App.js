import Nav from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Location from "./components/Location";
import { Routes, Route } from "react-router";
import { Signup } from "./components/Auth/Signup";
import { Login } from "./components/Auth/Login";
import { useState } from "react";
import { Booking } from "./components/booking/Booking";
import { Checkout } from "./components/checkout/Checkout";
import { Paymentpage } from "./components/paymentpage/paymentpage";




function App() {
  const [modal, setModal] = useState(true);
  return (
    <>
      <div style={{ width: "100%", position: "absolute", zIndex: "14" }}>
        <Nav />
      </div>
      {modal ? <Location state={setModal} /> : ""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/bookingPage" element={<Booking />}></Route>
        <Route path="/checkout/:id" element={<Checkout />}></Route>
        <Route path="/checkout/paymentpage/:total" element={<Paymentpage />}></Route>
        <Route path="/:user" element={<Login />}></Route>
      </Routes>
    
      <Footer />
      
    </>
  );
}

export default App;
