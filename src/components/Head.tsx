


import Image from "next/image";

export default function Head() {
  return (
    <main className="w-full max-w-screen-xl mx-auto bg-[#2A254B] px-6 py-4 flex justify-between items-center"> 
     
      <div className="flex flex-col justify-start w-[60%] space-y-6"> 
        <h2 className="text-3xl md:text-4xl text-white font-semibold leading-tight">
          The furniture brand for the future, with timeless designs
        </h2>

       
        <button className="bg-[#F9F9F926] py-3 text-sm w-[180px] h-[56px] text-white hover:bg-[#a4a3a3] transition duration-300">
          View Collections
        </button>

       
        <p className="text-sm text-white mt-10">
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
        </p>
      </div>

     
      <div className="flex items-center justify-end w-[35%]">
        <Image
          src={"/Right image.png"}
          className="w-full h-auto object-contain"
          width={350}  
          height={250} 
          alt="furniture image"
        />
      </div>
    </main>
  );
}










