
import Image from "next/image";
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

export default function Products() {
  return (
    <div className="w-full py-10">
      <h1 className="text-left text-3xl font-clashdisplay mb-8 ml-8">New Ceramics</h1>
      <div className="flex justify-between gap-8 flex-wrap">
        {product.map((data) => (
          <div
            key={data.title}
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

      
      <div className="mt-8 text-center">
        
        <Link href="/product/id"> 
          <button className="bg-gray-200 text-black py-2 px-6 rounded-none hover:bg-gray-500 transition-all">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}


