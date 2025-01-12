
import React from "react";

export default function ShoppingCart() {
  return (
    <div
      className="w-[1440px] h-[749px] gap-0 opacity-100 bg-[#f9f9f9] p-8 relative"
      // The opacity is set to 100 for visibility
    >
      {/* Heading: Your Shopping Cart */}
      <h1 className="text-4xl font-semibold text-black">Your Shopping Cart</h1>

      {/* Small Heading: Products */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6">Products</h2>

      <hr className="my-6 border-t-2 border-gray-300" />
      {/* Product 1 */}
      <div className="flex items-center mt-6">
        {/* Product Image */}
        <div className="w-[120px] h-[120px] bg-gray-300 rounded-md">
          <img
            src="/Product Image.png"
            alt="Graystone Vase"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Description */}
        <div className="ml-6 flex-1">
          <p className="text-lg font-semibold text-gray-700">Graystone Vase</p>
          <p className="text-sm text-gray-500 mt-2">
            A timeless ceramic vase with a tri-color grey glaze.
          </p>

          {/* Row: Quality, Total */}
          <div className="flex justify-between items-center mt-4">
            {/* Quality */}
            <div>
              <p className="text-sm font-medium text-gray-700">Quality</p>
              <p className="text-sm text-gray-500">1</p>
            </div>

            {/* Total */}
            <div>
              <p className="text-sm font-medium text-gray-700 mr-32">Total</p>
              <p className="text-sm text-gray-500">£85</p>
            </div>
          </div>
        </div>
      </div>



      {/* Product 2 (Copy of Product 1) */}
      <div className="flex items-center mt-6">
        {/* Product Image */}
        <div className="w-[120px] h-[120px] bg-gray-300 rounded-md">
          <img
            src="/Product Image (1).png"
            alt="Graystone Vase"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Description */}
        <div className="ml-6 flex-1">
          <p className="text-lg font-semibold text-gray-700">Basic white vase</p>
          <p className="text-sm text-gray-500 mt-2">
          Beautiful and simple this is
          one for the classics
          </p>

          {/* Row: Quality, Total */}
          <div className="flex justify-between items-center mt-4">
            {/* Quality */}
            <div>
              <p className="text-sm font-medium text-gray-700">Quality</p>
              <p className="text-sm text-gray-500">1</p>
            </div>

            {/* Total */}
            <div>
              <p className="text-sm font-medium text-gray-700 mr-32">Total</p>
              <p className="text-sm text-gray-500">£85</p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line before the checkout section */}
      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Checkout Section (Bottom-Right Corner) */}
      <div className="absolute bottom-6 right-6 text-right">
        {/* Heading: Hello */}
        <h2 className="text-x font-semibold text-gray-800 mr-32">Subtotal
        £210</h2>
        
        {/* Subheading: Hi */}
        <h3 className="text-sm font-medium text-gray-600 mt-1 mr-32">Taxes and shipping are calculated at checkout</h3>

        {/* Go to Checkout Button */}
        <button
          className="mt-3 px-4 py-2 bg-[rgba(42,37,75,1)] text-white text-sm rounded-md hover:bg-opacity-90 transition-all duration-300 mr-32"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
