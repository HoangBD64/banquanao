import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://th.bing.com/th/id/OIP.EnQ4zDazjtKmF9KNXBP6bgHaJQ?w=148&h=185&c=7&r=0&o=5&pid=1.7"
              alt=""
            ></img>
            <div className="ml-5 space-y-2">
              <p className="">Nguyen Dinh hoang</p>
              <p className="opacity-50 text-xs font-semibold">size: M</p>
              <p className="opacity-50 text-xs font-semibold">color: black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$109</p>
        </Grid>
        <Grid item xs={4}>
          {true && 
            <div>
            <p>
            <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"></AdjustIcon>
              <span>Delivered on March 03</span>
              <hr></hr>
              <span className="text-xs">Your Item Has Been Delivered</span>
            </p>
            </div>
            
          }
          {false && <p>
            <span>Expexted Delivered on March 03</span>
          </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
