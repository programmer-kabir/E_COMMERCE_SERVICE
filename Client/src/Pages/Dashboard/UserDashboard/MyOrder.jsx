import React from "react";
import PriceInfo from "../../../Components/Design/PriceInfo";

const MyOrder = () => {
  const discount = 100.25;
  const subtotal = 100.25;
  const vatRate = 0.5;
  const discountedTotal = 0.5;
  return (
    <div className="px-5 pt-7 ">
      <div className="mt-40 border-b-2 pb-7 flex px-10 items-center flex-col justify-center ">
        <img
          className="p-2"
          src="https://i.ibb.co/8XZwct2/empty-cart.png"
          alt=""
        />
        <p className="py-5 font-medium ">Your Cart is empty</p>
        <button className="primaryButton w-[140px]">Go To Shop</button>
      </div>
      {/* {booked.length > 0 && ( */}
        {/* <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-600">Discount:</span>
                <span className="font-bold text-gray-900">
                  {discount.toFixed(2)} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-bold text-gray-900">
                  {subtotal.toFixed(2)} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  VAT ({(vatRate * 100).toFixed(0)}%):
                </span>
                <span className="font-bold text-gray-900">
                  {(subtotal * vatRate).toFixed(2)} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-gray-900">
                  {discountedTotal.toFixed(2)} TK
                </span>
              </div>
            </dl>

            <div className="flex justify-end">
              {discount > 0 && (
                <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <p className="whitespace-nowrap text-xs">
                    {discount} TK Discount Applied
                  </p>
                </span>
              )}
            </div>
          </div>
        </div> */}
        <PriceInfo subtotal={5000}/>
      {/* )}{" "} */}
    </div>
  );
};

export default MyOrder;