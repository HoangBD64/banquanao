import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
    <div className='p-5 shadow-lg rounded-s-md border '>
      <AddressCard></AddressCard>
    </div>
    <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem ></CartItem>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$4697</span>
              </div>
              <div className="flex justify-between pt-3 text-green-600">
                <span>Disccount</span>
                <span>-$3419</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Changes</span>
                <span className="text-green-600">$Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$1278</span>
              </div>
            </div>
            <Button
              color="secondary"
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary