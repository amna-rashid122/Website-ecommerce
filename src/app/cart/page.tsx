
import React from "react";
import Image from "next/image";

export default function ShoppingCart() {
  return (
    <div
      className="w-[1440px] h-[749px] gap-0 opacity-100 bg-[#f9f9f9] p-8 relative"
     
    >
      
      <h1 className="text-4xl font-semibold text-black">Your Shopping Cart</h1>

      
      <h2 className="text-xl font-semibold text-gray-800 mt-6">Products</h2>

      <hr className="my-6 border-t-2 border-gray-300" />
      
      <div className="flex items-center mt-6">
        
        <div className="w-[120px] h-[120px] bg-gray-300 rounded-md">
          <Image
            src="/Product Image.png"
            alt="Graystone Vase"
            className="w-full h-full object-cover rounded-md"
            width={2}
            height={2}
          />
        </div>

        
        <div className="ml-6 flex-1">
          <p className="text-lg font-semibold text-gray-700">Graystone Vase</p>
          <p className="text-sm text-gray-500 mt-2">
            A timeless ceramic vase with a tri-color grey glaze.
          </p>

          
          <div className="flex justify-between items-center mt-4">
            
            <div>
              <p className="text-sm font-medium text-gray-700">Quality</p>
              <p className="text-sm text-gray-500">1</p>
            </div>

            
            <div>
              <p className="text-sm font-medium text-gray-700 mr-32">Total</p>
              <p className="text-sm text-gray-500">£85</p>
            </div>
          </div>
        </div>
      </div>



      <div className="flex items-center mt-6">
        
        <div className="w-[120px] h-[120px] bg-gray-300 rounded-md">
          <Image
            src="/Product Image (1).png"
            alt="Graystone Vase"
            className="w-full h-full object-cover rounded-md"
            width={2}
            height={2}
          />
        </div>

       
        <div className="ml-6 flex-1">
          <p className="text-lg font-semibold text-gray-700">Basic white vase</p>
          <p className="text-sm text-gray-500 mt-2">
          Beautiful and simple this is
          one for the classics
          </p>

          
          <div className="flex justify-between items-center mt-4">
           
            <div>
              <p className="text-sm font-medium text-gray-700">Quality</p>
              <p className="text-sm text-gray-500">1</p>
            </div>

            
            <div>
              <p className="text-sm font-medium text-gray-700 mr-32">Total</p>
              <p className="text-sm text-gray-500">£85</p>
            </div>
          </div>
        </div>
      </div>

      
      <hr className="my-6 border-t-2 border-gray-300" />

      
      <div className="absolute bottom-6 right-6 text-right">
        
        <h2 className="text-x font-semibold text-gray-800 mr-32">Subtotal
        £210</h2>
       
        <h3 className="text-sm font-medium text-gray-600 mt-1 mr-32">Taxes and shipping are calculated at checkout</h3>

        
        <button
          className="mt-3 px-4 py-2 bg-[rgba(42,37,75,1)] hover:bg-[#333333]  text-white text-sm rounded-md hover:bg-opacity-90 transition-all duration-300 mr-32"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
}
