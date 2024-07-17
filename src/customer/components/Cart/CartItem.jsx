import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-top object-cover"
            src="https://icdn.24h.com.vn/upload/1-2022/images/2022-01-21/image6-1642732169-269-width500height333.jpg"
            alt=""
          ></img>
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">hoang ddjep trai</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: sieu cap vip pro</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">$190</p>
            <p className="opacity-50 line-through">$211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-0 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
            </IconButton>
            <span className="px-7 py-1 border rounded-sm">3</span>
              <IconButton sx={{color:"rgb(145 85 253)"}}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </IconButton>
            
          </div>

            <div>
                <Button sx={{color:"rgb(145 85 253)"}}>remove</Button>
            </div>

        </div>

    </div>
  );
};

export default CartItem;
