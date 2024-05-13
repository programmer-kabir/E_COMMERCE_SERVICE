import React from 'react'

const PriceInfo = ({subtotal}) => {
    const vatRate = 0.05;
    const total = subtotal * (1 + vatRate);
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
        </div>
    </div>
  )
}

export default PriceInfo