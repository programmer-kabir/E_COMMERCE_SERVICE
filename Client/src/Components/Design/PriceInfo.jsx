import React from 'react'

const PriceInfo = ({subtotal,length}) => {
  let delivery = 0;

  if (length === 1) {
    delivery = 150;
  } else if (length > 1) {
    delivery = 150 + (length - 1) * 150;
  }
  
  console.log(delivery);
  // const delivery = 150;
    const total = subtotal + delivery;
    let discount = 0;
  if (total >= 3000) {
    discount = 150;
  } else if (total >= 6000) {
    discount = 300;
  } else if (total >= 9000) {
    discount = 500;
  }
  const discountedTotal = total - discount;
  return (
    <div>
         <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-base text-gray-700">
              <div className="flex justify-between">
                <span className="primaryColor font-medium">Discount:</span>
                <span className="font-bold text-gray-900">
                  {discount.toFixed(2)} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="primaryColor font-medium">Subtotal:</span>
                <span className="font-bold text-gray-900">
                  {subtotal.toFixed(2)} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="primaryColor font-medium">
                  Delivery Charge:
                </span>
                <span className="font-bold text-gray-900">
                  {delivery} TK
                </span>
              </div>
              <div className="flex justify-between">
                <span className="primaryColor font-medium">Total:</span>
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
        </div>
    </div>
  )
}

export default PriceInfo