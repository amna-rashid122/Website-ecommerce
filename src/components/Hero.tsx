
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link"; 

export default function Hero() {
  return (
    <main className="bg-[#FFFFFF] w-full h-[132px] flex justify-center items-start relative mt-6">
      
      <div className="flex justify-center items-start">
        <h1 className="text-black text-lg sm:text-xl font-Clash">Avion</h1>
      </div>

      <CiSearch className="text-black absolute left-[20px] text-lg sm:text-xl hover:text-blue-500 hover:scale-110 transition-all duration-300" />
     
      <Link href="/cart">
        
          <IoCartOutline className="text-black absolute right-[75px] text-lg sm:text-xl hover:text-green-500 hover:scale-110 transition-all duration-300" />
        
      </Link>
      
     
      <Link href="/about">
        
          <CgProfile className="text-black absolute right-10 text-lg sm:text-xl hover:text-purple-500 hover:scale-110 transition-all duration-300" />
        
      </Link>
    </main>
  );
}




