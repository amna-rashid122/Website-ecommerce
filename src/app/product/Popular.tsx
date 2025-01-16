

import Image from "next/image";
import Link from "next/link"; 

interface Iproducts {
  title: string;
  price: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "The Poplar suede sofa",
    price: "£980",
    img_url: "/Large.png",  
  },
  {
    title: "The Dandy chair",
    price: "£250",
    img_url: "/Parent.png",  
  },
  {
    title: "The dandy chair",
    price: "£250",
    img_url: "/Parent (6).png",  
  },
];

export default function Popular() {
  return (
    <div className="w-full py-10">
      <h1 className="text-left text-3xl font-clashdisplay mb-8 ml-8">Our popular products</h1>
      <div className="flex justify-between gap-8 flex-wrap">
        {product.map((data) => {
          
          const isLargeImage = data.img_url === "/Large.png";

          return (
            <div
              key={data.title}
              className={`${
                isLargeImage ? "w-[610px]" : "w-[305px]" 
              } bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden`}
            >
            
              <div className="relative w-full mb-4 overflow-hidden">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  layout="intrinsic" 
                  width={isLargeImage ? 610 : 305}  
                  height={isLargeImage ? 700 : 350} 
                  quality={100}
                  priority={true}
                  className="w-full h-auto" 
                />
              </div>

              
              <div className="flex flex-col items-center mt-4">
                
                <p className="font-semibold text-lg mb-2">{data.title}</p>
                
                <p className="text-xl text-gray-800">{data.price}</p>
              </div>
            </div>
            
          );
        })}
      </div>
 
      
        <div className="mt-10 text-center">
        <button className="bg-gray-300 text-black py-2 px-6 rounded-none hover:bg-gray-500 transition-all mt-[-10px]">
  View All
</button>

<div className="bg-gray-200 py-12"> 
  <div className="flex justify-center">
    <div className="w-[1273px] h-[364px] bg-white flex flex-col items-center justify-center text-center p-6">
      
      <h1 className="text-3xl text-black mb-4">
        Join the club and get the benefits
      </h1>

      
      <p className="text-sm text-gray-600">
        Sign up for our newsletter and receive exclusive offers on new ranges,
      </p>
      <p className="text-sm text-gray-600">
        sales, pop-up stores, and more.
      </p>

      
      <div className="mt-6 flex items-center">
        <input
          type="email"
          placeholder="your@email.com"
          className="w-72 p-2 border-2 border-gray-300 rounded-l-md text-gray-800 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-[rgba(42,37,75,1)] text-white py-2 px-6 square-r-md hover:bg-[rgba(42,37,75,.8)] transition-all">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>


<div className="flex justify-center mt-8">
  <img
    src="/Features.png" 
    alt="Description of the image"
    className="w-full max-w-[1273px] h-auto"
  />
</div>



      </div>
    </div> 
  );
}



