import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

function CartItem(props) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(props.item.id));
    toast.success("Item removed successfully");
  };

  return (
    <div className=" flex  items-center  justify-between ml-5 mb-2 w-full">
      <div className="flex lg:flex-row md:flex-col sm:flex-col min-[10px]:flex-col p-0 gap-5 items-center">
        <div className=" w-[50%]">
          <img className="object-cover " alt="title_image" src={props.item.image} />
        </div>
        <div className="self-start w-[100%] m-10 md:m-2">
          <h1 className="font-semibold text-xl text-[#4D5665]">
            {props.item.title}
          </h1>
          <h1 className="mt-5 text-[#334155] ">{props.item.description}</h1>
          <div className="flex justify-between items-center mt-5">
            <div className="text-green-600 font-bold">
              <p>${props.item.price}</p>
            </div>
            <div className="bg-[#FECACA] p-3 rounded-full cursor-pointer" onClick={removeFromCart}>
              <AiTwotoneDelete className="text-[#991B1B]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
