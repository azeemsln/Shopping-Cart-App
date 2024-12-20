import React from "react";
import logo from "../../src/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/home">
          <img className="w-[150px] ml-[15%] my-[12px]" alt="item_image" src={logo} />
        </NavLink>
        <div className="flex  text-[#F1F5DE] my-auto mt-[28px]">
          <NavLink to="/home">
            <p className="mr-4">Home</p>
          </NavLink>
          <div className="flex">
          <NavLink to="/cart">
            <div className="flex relative h-10 w-10 justify-between">
              <FaShoppingCart className="text-2xl " />
              {cart.length > 0 && <div className="absolute animate-bounce bg-[#16A34A] rounded-[50%] w-[20px] h-[20px] right-[5px] top-[-10px] text-center text-[14px]">
                {cart.length}
              </div>}
            </div>
          </NavLink>
          <NavLink to="/" className="bg-green-700 px-2 py-2 rounded-md ml-5">Logout</NavLink>
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
