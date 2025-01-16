
import React from 'react';
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link"; 


interface Iproducts {
  title: string;
  price: string;
  img_url: string;
  id: number;
}

let product: Iproducts[] = [
  {
    id: 1,
    title: "The Dandy chair",
    price: "£250",
    img_url: "/Parent.png",
  },
  {
    id: 2,
    title: "Rustic Vase Set",
    price: "£155",
    img_url: "/Parent (1).png",
  },
  {
    id: 3,
    title: "The Silky Vase",
    price: "£125",
    img_url: "/Parent (2).png",
  },
  {
    id: 4,
    title: "The Lucy Lamp",
    price: "£399",
    img_url: "/Parent (3).png",
  },
];

let secondProduct: Iproducts[] = [
  {
    id: 1,
    title: "",
    price: "",
    img_url: "/Product Card (1).png",
  },
  {
    id: 2,
    title: "",
    price: "",
    img_url: "/Product Card (2).png",
  },
  {
    id: 3,
    title: "",
    price: "",
    img_url: "/Product Card (3).png",
  },
  {
    id: 4,
    title: "",
    price: "",
    img_url: "/Product Card (4).png",
  },
];

const page = () => {
  return (
    <div>
      
      <div>
        <img 
          src="/Frame 143.png" 
          alt="Description of Image" 
          style={{ width: "100%", height: "auto" }} 
        />
      </div>

    
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <div>
          <ul className="flex space-x-6">
            
            <li className="flex items-center">
              <span>Category</span> <FaCaretDown className="text-gray-600" />
            </li>

            
            <li className="flex items-center">
              <span>Product Type</span> <FaCaretDown className="text-gray-600" />
            </li>

            
            <li className="flex items-center">
              <span>Price</span> <FaCaretDown className="text-gray-600" />
            </li>

            
            <li className="flex items-center">
              <span>Brand</span> <FaCaretDown className="text-gray-600" />
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          <div className="flex items-center">
            <span>Sorting By</span> <FaCaretDown className="text-gray-600" />
          </div>

          <div className="flex items-center">
            <span>Date Added</span> <FaCaretDown className="text-gray-600" />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-8 flex-wrap">
        {product.map((data) => (
          <div
            key={data.id}
            className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
          >
           
            <div className="relative w-full h-[350px] mb-4 overflow-hidden">
              <Image
                src={data.img_url}
                alt={data.title}
                width={305}
                height={350}
                objectFit="cover"
                quality={100}
                priority={true}
                className="w-full h-full"
              />
            </div>

            
            <div className="flex flex-col items-center mt-4">
             
              <p className="font-semibold text-lg mb-2">{data.title}</p>
              
              <p className="text-xl text-gray-800">{data.price}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-between gap-8 flex-wrap mt-8">
        {secondProduct.map((data) => (
          <div
            key={data.id}
            className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
          >
            
            <div className="relative w-full h-[350px] mb-4 overflow-hidden">
              <Image
                src={data.img_url}
                alt={data.title}
                width={305}
                height={350}
                objectFit="cover"
                quality={100}
                priority={true}
                className="w-full h-full"
              />
            </div>

           
            <div className="flex flex-col items-center mt-4">
              
              <p className="font-semibold text-lg mb-2">{data.title}</p>
              
              <p className="text-xl text-gray-800">{data.price}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="w-full py-10">
        <div className="flex justify-between gap-8 flex-wrap mt-8">
          {product.map((data) => (
            <div
              key={data.id}
              className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
            >
              
              <div className="relative w-full h-[350px] mb-4 overflow-hidden">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  width={305}
                  height={350}
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  className="w-full h-full"
                />
              </div>

              
              <div className="flex flex-col items-center mt-4">
                
                <p className="font-semibold text-lg mb-2">{data.title}</p>
                
                <p className="text-xl text-gray-800">{data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-center mb-8 mt-1">
      
          <button className="bg-gray-200 text-black py-2 px-6 rounded-none hover:bg-gray-500 transition-all items-center">
            View Collection
          </button>
        
      </div>
    </div>
  );
};

export default page;
