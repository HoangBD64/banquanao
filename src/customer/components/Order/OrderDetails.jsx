import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Dilivery Address </h1>
        <AddressCard></AddressCard>
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3}></OrderTraker>
      </div>
      <Grid container className="space-y-5">
      {[1,1,1,1,1].map((item) =>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: " center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
              className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://th.bing.com/th?q=H%c3%acnh+Anime+N%e1%bb%af+Th%e1%ba%a7n&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=strict&t=1&mw=247"
                alt=""
              ></img>
              <div className="space-y-2 ml-5">
                <p className="font-semibold">
                    Men Slim Mid Rise Black
                </p>
                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color : pink</span> <span>Sixe : M</span></p>
                <p>Seller : Linaria</p>
                <p>$350</p>
              </div>
            </div>
          </Grid>
          <Grid item>
                <Box sx={{color:deepPurple[500]}} className="flex">
                    <StarIcon className="px-2 w-9"></StarIcon>
                    <span>Rate & Review Product</span>
                </Box>
          </Grid>
        </Grid>
      )}
      </Grid>
    </div>
  );
};

export default OrderDetails;
