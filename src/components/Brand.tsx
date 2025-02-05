

import { FaTruckFast } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { VscCreditCard } from "react-icons/vsc";
import { LuSprout } from "react-icons/lu";

export default function Brand() {
  return (
    <main>
      <div>
        <h1 className="text-center text-2xl  mb-6 mt-10">What makes our brand different</h1> {/* Added mt-10 for space */}
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6">
          <FaTruckFast className="text-black text-3xl sm:text-4xl hover:text-orange-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Next day as standard</p>
            <p className="text-sm">Order before 3pm and get your order the next day as standard</p>
          </div>
        </div>

      
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6">
          <CiCircleCheck className="text-black text-3xl sm:text-4xl hover:text-green-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Made by true artisans</p>
            <p className="text-sm">Handmade crafted goods made with real passion and craftsmanship</p>
          </div>
        </div>

      
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6">
          <VscCreditCard className="text-black text-3xl sm:text-4xl hover:text-red-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Unbeatable prices</p>
            <p className="text-sm">For our materials and quality, you would not find better prices anywhere</p>
          </div>
        </div>

      
        <div className="flex flex-col items-center w-1/4 sm:w-1/5 md:w-1/6">
          <LuSprout className="text-black text-3xl sm:text-4xl hover:text-yellow-500 hover:scale-110 transition-all duration-300" />
          <div className="text-center mt-2">
            <p className="font-semibold">Recycled packaging</p>
            <p className="text-sm">We use 100% recycled packaging to ensure our footprint is manageable</p>
          </div>
        </div>
      </div>
    </main>
  );
}
