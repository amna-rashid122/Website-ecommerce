

import Image from "next/image";
import Link from "next/link"; // Import Link component from Next.js

interface Iproducts {
  title: string;
  price: string;
  img_url: string;
}

let product: Iproducts[] = [
  {
    title: "The Poplar suede sofa",
    price: "£980",
    img_url: "/Large.png",  // This will be the larger image
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
          // Determine if the image is the large one
          const isLargeImage = data.img_url === "/Large.png";

          return (
            <div
              key={data.title}
              className={`${
                isLargeImage ? "w-[610px]" : "w-[305px]" // Make the large image twice as wide
              } bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden`}
            >
              {/* Image container */}
              <div className="relative w-full mb-4 overflow-hidden">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  layout="intrinsic" // Automatically uses the image's intrinsic size
                  width={isLargeImage ? 610 : 305}  // Larger width for the Large.png
                  height={isLargeImage ? 700 : 350} // Larger height for the Large.png
                  quality={100}
                  priority={true}
                  className="w-full h-auto" // Ensures the image adjusts to the container
                />
              </div>

              {/* Title and Price container */}
              <div className="flex flex-col items-center mt-4">
                {/* Title */}
                <p className="font-semibold text-lg mb-2">{data.title}</p>
                {/* Price */}
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

<div className="bg-gray-200 py-12"> {/* Outer container with gray background on top and bottom */}
  <div className="flex justify-center">
    <div className="w-[1273px] h-[364px] bg-white flex flex-col items-center justify-center text-center p-6">
      {/* Heading (h1) centered perfectly with black color */}
      <h1 className="text-3xl text-black mb-4">
        Join the club and get the benefits
      </h1>

      {/* Paragraph with smaller text and grey color */}
      <p className="text-sm text-gray-600">
        Sign up for our newsletter and receive exclusive offers on new ranges,
      </p>
      <p className="text-sm text-gray-600">
        sales, pop-up stores, and more.
      </p>

      {/* Email input and Sign Up button */}
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

{/* Image Section after the container */}
<div className="flex justify-center mt-8">
  <img
    src="/Features.png" // Replace with your image path
    alt="Description of the image"
    className="w-full max-w-[1273px] h-auto"
  />
</div>



      </div>
    </div> 
  );
}



