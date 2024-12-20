import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(props.post));
    toast.success("Item added successfully");
  };
  const removeFromCart = () => {
    dispatch(remove(props.post.id));
    toast.success("Item removed successfully");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{props.post.title}</p>
      </div>
      <div className="text-[#A9A3C1] text-[10px] text-left w-40 font-normal">
        <p>
          {props.post.description.split(" ").slice(0, 10).join(" ") + "...."}
        </p>
      </div>
      <div className="z-14">
        <img src={props.post.image} alt="item_image" className="h-[180px]" />
      </div>
      <div className="flex gap-12 items-center justify-between">
        <div className="text-green-600 font-semibold">
          <p>${props.post.price}</p>
        </div>
        <div>
          {cart.some((p) => p.id === props.post.id) ? (
            <button onClick={removeFromCart} className="rounded-full border-2 border-gray-700 text-[12px] px-3 p-1 font-semibold text-gray-700 hover:bg-[#374151] transition duration-5 00 ease hover:text-white">REMOVE ITEM</button>
          ) : (
            <button onClick={addToCart} className="rounded-full border-2 border-gray-700 text-[12px] px-3 p-1 font-semibold text-gray-700 hover:bg-[#374151] transition duration-5 00 ease hover:text-white">ADD TO CART</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
