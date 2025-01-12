

// // // // // // import React from 'react';
// // // // // // import { FaCaretDown } from "react-icons/fa"; // Import caret down icon

// // // // // // const page = () => {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div>
// // // // // //         {/* Image Section */}
// // // // // //         <img 
// // // // // //           src="/Frame 143.png" 
// // // // // //           alt="Description of Image" 
// // // // // //           style={{ width: "100%", height: "auto" }} 
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* Product Info Section */}
// // // // // //       <div style={{ padding: '20px' }}>
// // // // // //         <div>
// // // // // //           <ul className="flex space-x-6">
// // // // // //             {/* Category */}
// // // // // //             <li className="flex items-center">
// // // // // //               <span>Category</span> <FaCaretDown className="text-gray-600" />
// // // // // //             </li>

// // // // // //             {/* Product Type */}
// // // // // //             <li className="flex items-center">
// // // // // //               <span>Product Type</span> <FaCaretDown className="text-gray-600" />
// // // // // //             </li>

// // // // // //             {/* Price */}
// // // // // //             <li className="flex items-center">
// // // // // //               <span>Price</span> <FaCaretDown className="text-gray-600" />
// // // // // //             </li>

// // // // // //             {/* Brand */}
// // // // // //             <li className="flex items-center">
// // // // // //               <span>Brand</span> <FaCaretDown className="text-gray-600" />
// // // // // //             </li>
// // // // // //           </ul>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default page;


// // // // // import React from 'react';
// // // // // import { FaCaretDown } from "react-icons/fa"; // Import caret down icon

// // // // // const page = () => {
// // // // //   return (
// // // // //     <div>
// // // // //       <div>
// // // // //         {/* Image Section */}
// // // // //         <img 
// // // // //           src="/Frame 143.png" 
// // // // //           alt="Description of Image" 
// // // // //           style={{ width: "100%", height: "auto" }} 
// // // // //         />
// // // // //       </div>

// // // // //       {/* Product Info Section */}
// // // // //       <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // // //         {/* Left Section (Category, Product Type, Price, Brand) */}
// // // // //         <div>
// // // // //           <ul className="flex space-x-6">
// // // // //             {/* Category */}
// // // // //             <li className="flex items-center">
// // // // //               <span>Category</span> <FaCaretDown className="text-gray-600" />
// // // // //             </li>

// // // // //             {/* Product Type */}
// // // // //             <li className="flex items-center">
// // // // //               <span>Product Type</span> <FaCaretDown className="text-gray-600" />
// // // // //             </li>

// // // // //             {/* Price */}
// // // // //             <li className="flex items-center">
// // // // //               <span>Price</span> <FaCaretDown className="text-gray-600" />
// // // // //             </li>

// // // // //             {/* Brand */}
// // // // //             <li className="flex items-center">
// // // // //               <span>Brand</span> <FaCaretDown className="text-gray-600" />
// // // // //             </li>
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* Right Section (Sorting By and Date Added) */}
// // // // //         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
// // // // //           {/* Sorting By */}
// // // // //           <div className="flex items-center">
// // // // //             <span>Sorting By<b>:</b></span>
// // // // //           </div>

// // // // //           {/* Date Added */}
// // // // //           <div className="flex items-center">
// // // // //             <span>Date Added</span> <FaCaretDown className="text-gray-600" />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default page;


// // // // import React from 'react';
// // // // import { FaCaretDown } from "react-icons/fa"; // Import caret down icon
// // // // import Image from 'next/image'; // Ensure Image component is imported for Next.js

// // // // // Product data interface and sample data
// // // // interface Iproducts {
// // // //   title: string;
// // // //   price: string;
// // // //   img_url: string;
// // // //   id: number; // Add 'id' for dynamic routing
// // // // }

// // // // let product: Iproducts[] = [
// // // //   {
// // // //     id: 1,
// // // //     title: "The Dandy chair",
// // // //     price: "£250",
// // // //     img_url: "/Parent.png",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: "Rustic Vase Set",
// // // //     price: "£155",
// // // //     img_url: "/Parent (1).png",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "The Silky Vase",
// // // //     price: "£125",
// // // //     img_url: "/Parent (2).png",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     title: "The Lucy Lamp",
// // // //     price: "£399",
// // // //     img_url: "/Parent (3).png",
// // // //   },
// // // // ];

// // // // const page = () => {
// // // //   return (
// // // //     <div>
// // // //       {/* Image Section */}
// // // //       <div>
// // // //         <img 
// // // //           src="/Frame 143.png" 
// // // //           alt="Description of Image" 
// // // //           style={{ width: "100%", height: "auto" }} 
// // // //         />
// // // //       </div>

// // // //       {/* Product Info Section */}
// // // //       <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // // //         {/* Left Section (Category, Product Type, Price, Brand) */}
// // // //         <div>
// // // //           <ul className="flex space-x-6">
// // // //             {/* Category */}
// // // //             <li className="flex items-center">
// // // //               <span>Category</span> <FaCaretDown className="text-gray-600" />
// // // //             </li>

// // // //             {/* Product Type */}
// // // //             <li className="flex items-center">
// // // //               <span>Product Type</span> <FaCaretDown className="text-gray-600" />
// // // //             </li>

// // // //             {/* Price */}
// // // //             <li className="flex items-center">
// // // //               <span>Price</span> <FaCaretDown className="text-gray-600" />
// // // //             </li>

// // // //             {/* Brand */}
// // // //             <li className="flex items-center">
// // // //               <span>Brand</span> <FaCaretDown className="text-gray-600" />
// // // //             </li>
// // // //           </ul>
// // // //         </div>

// // // //         {/* Right Section (Sorting By and Date Added) */}
// // // //         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
// // // //           {/* Sorting By */}
// // // //           <div className="flex items-center">
// // // //             <span>Sorting By</span> <FaCaretDown className="text-gray-600" />
// // // //           </div>

// // // //           {/* Date Added */}
// // // //           <div className="flex items-center">
// // // //             <span>Date Added</span> <FaCaretDown className="text-gray-600" />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Product Display Section */}
      
// // // //         <div className="flex justify-between gap-8 flex-wrap">
// // // //           {product.map((data) => (
// // // //             <div
// // // //               key={data.id} // Use `id` for the key instead of `title`
// // // //               className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
// // // //             >
// // // //               {/* Image container */}
// // // //               <div className="relative w-full h-[350px] mb-4 overflow-hidden">
// // // //                 <Image
// // // //                   src={data.img_url}
// // // //                   alt={data.title}
// // // //                   width={305}
// // // //                   height={350}
// // // //                   objectFit="cover"
// // // //                   quality={100}
// // // //                   priority={true}
// // // //                   className="w-full h-full"
// // // //                 />
// // // //               </div>

// // // //               {/* Title and Price container */}
// // // //               <div className="flex flex-col items-center mt-4">
// // // //                 {/* Title */}
// // // //                 <p className="font-semibold text-lg mb-2">{data.title}</p>
// // // //                 {/* Price */}
// // // //                 <p className="text-xl text-gray-800">{data.price}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
    
// // // //   );
// // // // };

// // // // export default page;






// // // import React from 'react';
// // // import { FaCaretDown } from "react-icons/fa"; // Import caret down icon
// // // import Image from 'next/image'; // Ensure Image component is imported for Next.js

// // // // Product data interface and sample data
// // // interface Iproducts {
// // //   title: string;
// // //   price: string;
// // //   img_url: string;
// // //   id: number; // Add 'id' for dynamic routing
// // // }

// // // let product: Iproducts[] = [
// // //   {
// // //     id: 1,
// // //     title: "The Dandy chair",
// // //     price: "£250",
// // //     img_url: "/Parent.png",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Rustic Vase Set",
// // //     price: "£155",
// // //     img_url: "/Parent (1).png",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "The Silky Vase",
// // //     price: "£125",
// // //     img_url: "/Parent (2).png",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "The Lucy Lamp",
// // //     price: "£399",
// // //     img_url: "/Parent (3).png",
// // //   },
// // // ];

// // // const page = () => {
// // //   return (
// // //     <div>
// // //       {/* Image Section */}
// // //       <div>
// // //         <img 
// // //           src="/Frame 143.png" 
// // //           alt="Description of Image" 
// // //           style={{ width: "100%", height: "auto" }} 
// // //         />
// // //       </div>

// // //       {/* Product Info Section */}
// // //       <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //         {/* Left Section (Category, Product Type, Price, Brand) */}
// // //         <div>
// // //           <ul className="flex space-x-6">
// // //             {/* Category */}
// // //             <li className="flex items-center">
// // //               <span>Category</span> <FaCaretDown className="text-gray-600" />
// // //             </li>

// // //             {/* Product Type */}
// // //             <li className="flex items-center">
// // //               <span>Product Type</span> <FaCaretDown className="text-gray-600" />
// // //             </li>

// // //             {/* Price */}
// // //             <li className="flex items-center">
// // //               <span>Price</span> <FaCaretDown className="text-gray-600" />
// // //             </li>

// // //             {/* Brand */}
// // //             <li className="flex items-center">
// // //               <span>Brand</span> <FaCaretDown className="text-gray-600" />
// // //             </li>
// // //           </ul>
// // //         </div>

// // //         {/* Right Section (Sorting By and Date Added) */}
// // //         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
// // //           {/* Sorting By */}
// // //           <div className="flex items-center">
// // //             <span>Sorting By</span> <FaCaretDown className="text-gray-600" />
// // //           </div>

// // //           {/* Date Added */}
// // //           <div className="flex items-center">
// // //             <span>Date Added</span> <FaCaretDown className="text-gray-600" />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Product Display Section */}
// // //       <div className="w-full py-10">
// // //         <h1 className="text-left text-3xl font-clashdisplay mb-8 ml-8">New Ceramics</h1>
// // //         <div className="flex justify-between gap-8 flex-wrap">
// // //           {product.map((data) => (
// // //             <div
// // //               key={data.id} // Use `id` for the key instead of `title`
// // //               className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
// // //             >
// // //               {/* Image container */}
// // //               <div className="relative w-full h-[350px] mb-4 overflow-hidden">
// // //                 <Image
// // //                   src={data.img_url}
// // //                   alt={data.title}
// // //                   width={305}
// // //                   height={350}
// // //                   objectFit="cover"
// // //                   quality={100}
// // //                   priority={true}
// // //                   className="w-full h-full"
// // //                 />
// // //               </div>

// // //               {/* Title and Price container */}
// // //               <div className="flex flex-col items-center mt-4">
// // //                 {/* Title */}
// // //                 <p className="font-semibold text-lg mb-2">{data.title}</p>
// // //                 {/* Price */}
// // //                 <p className="text-xl text-gray-800">{data.price}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Repeated Image Section #1 */}
// // //       <div>
// // //         <img 
// // //           src="/Frame 143.png" 
// // //           alt="Description of Image" 
// // //           style={{ width: "100%", height: "auto" }} 
// // //         />
// // //       </div>

// // //       {/* Repeated Image Section #2 */}
// // //       <div>
// // //         <img 
// // //           src="/Frame 143.png" 
// // //           alt="Description of Image" 
// // //           style={{ width: "100%", height: "auto" }} 
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default page;
























// // import Image from "next/image";
// // import Link from "next/link"; // Import Link component from Next.js

// // interface Iproducts {
// //   title: string;
// //   price: string;
// //   img_url: string;
// //   id: number; // Add 'id' for dynamic routing
// // }

// // let product: Iproducts[] = [
// //   {
// //     id: 1,
// //     title: "The Dandy chair",
// //     price: "£250",
// //     img_url: "/Parent.png",
// //   },
// //   {
// //     id: 2,
// //     title: "Rustic Vase Set",
// //     price: "£155",
// //     img_url: "/Parent (1).png",
// //   },
// //   {
// //     id: 3,
// //     title: "The Silky Vase",
// //     price: "£125",
// //     img_url: "/Parent (2).png",
// //   },
// //   {
// //     id: 4,
// //     title: "The Lucy Lamp",
// //     price: "£399",
// //     img_url: "/Parent (3).png",
// //   },
// // ];

// // export default function Products() {
// //   return (
// //     <div className="w-full py-10">
// //       <h1 className="text-left text-3xl font-clashdisplay mb-8 ml-8">New Ceramics</h1>
      
// //       {/* First set of products */}
// //       <div className="flex justify-between gap-8 flex-wrap">
// //         {product.map((data) => (
// //           <div
// //             key={data.id} // Use id instead of title as key
// //             className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
// //           >
// //             {/* Image container */}
// //             <div className="relative w-full h-[350px] mb-4 overflow-hidden">
// //               <Image
// //                 src={data.img_url}
// //                 alt={data.title}
// //                 width={305}
// //                 height={350}
// //                 objectFit="cover"
// //                 quality={100}
// //                 priority={true}
// //                 className="w-full h-full"
// //               />
// //             </div>

// //             {/* Title and Price container */}
// //             <div className="flex flex-col items-center mt-4">
// //               {/* Title */}
// //               <p className="font-semibold text-lg mb-2">{data.title}</p>
// //               {/* Price */}
// //               <p className="text-xl text-gray-800">{data.price}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Second set of products (same images) */}
// //       <div className="flex justify-between gap-8 flex-wrap mt-8">
// //         {product.map((data) => (
// //           <div
// //             key={data.id} // Use id instead of title as key
// //             className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
// //           >
// //             {/* Image container */}
// //             <div className="relative w-full h-[350px] mb-4 overflow-hidden">
// //               <Image
// //                 src={data.img_url}
// //                 alt={data.title}
// //                 width={305}
// //                 height={350}
// //                 objectFit="cover"
// //                 quality={100}
// //                 priority={true}
// //                 className="w-full h-full"
// //               />
// //             </div>

// //             {/* Title and Price container */}
// //             <div className="flex flex-col items-center mt-4">
// //               {/* Title */}
// //               <p className="font-semibold text-lg mb-2">{data.title}</p>
// //               {/* Price */}
// //               <p className="text-xl text-gray-800">{data.price}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Third set of products (same images) */}
// //       <div className="flex justify-between gap-8 flex-wrap mt-8">
// //         {product.map((data) => (
// //           <div
// //             key={data.id} // Use id instead of title as key
// //             className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
// //           >
// //             {/* Image container */}
// //             <div className="relative w-full h-[350px] mb-4 overflow-hidden">
// //               <Image
// //                 src={data.img_url}
// //                 alt={data.title}
// //                 width={305}
// //                 height={350}
// //                 objectFit="cover"
// //                 quality={100}
// //                 priority={true}
// //                 className="w-full h-full"
// //               />
// //             </div>

// //             {/* Title and Price container */}
// //             <div className="flex flex-col items-center mt-4">
// //               {/* Title */}
// //               <p className="font-semibold text-lg mb-2">{data.title}</p>
// //               {/* Price */}
// //               <p className="text-xl text-gray-800">{data.price}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

































// import Image from "next/image";
// import Link from "next/link"; // Import Link component from Next.js

// // Define first product list
// interface Iproducts {
//   title: string;
//   price: string;
//   img_url: string;
//   id: number;
// }

// let product: Iproducts[] = [
//   {
//     id: 1,
//     title: "The Dandy chair",
//     price: "£250",
//     img_url: "/Parent.png",
//   },
//   {
//     id: 2,
//     title: "Rustic Vase Set",
//     price: "£155",
//     img_url: "/Parent (1).png",
//   },
//   {
//     id: 3,
//     title: "The Silky Vase",
//     price: "£125",
//     img_url: "/Parent (2).png",
//   },
//   {
//     id: 4,
//     title: "The Lucy Lamp",
//     price: "£399",
//     img_url: "/Parent (3).png",
//   },
// ];

// // Define second set of product data (modify images and text here)
// let secondProduct: Iproducts[] = [
//   {
//     id: 1,
//     title: "",
//     price: "",
//     img_url: "/Product Card (1).png",
//   },
//   {
//     id: 2,
//     title: "",
//     price: "",
//     img_url: "/Product Card (2).png",
//   },
//   {
//     id: 3,
//     title: "",
//     price: "",
//     img_url: "/Product Card (3).png",
//   },
//   {
//     id: 4,
//     title: "",
//     price: "",
//     img_url: "/Product Card (4).png",
//   },
// ];

// export default function Products() {
//   return (
//     <div className="w-full py-10">
//       <h1 className="text-left text-3xl font-clashdisplay mb-8 ml-8">New Ceramics</h1>

//       {/* First set of products (original images) */}
//       <div className="flex justify-between gap-8 flex-wrap">
//         {product.map((data) => (
//           <div
//             key={data.id}
//             className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
//           >
//             {/* Image container */}
//             <div className="relative w-full h-[350px] mb-4 overflow-hidden">
//               <Image
//                 src={data.img_url}
//                 alt={data.title}
//                 width={305}
//                 height={350}
//                 objectFit="cover"
//                 quality={100}
//                 priority={true}
//                 className="w-full h-full"
//               />
//             </div>

//             {/* Title and Price container */}
//             <div className="flex flex-col items-center mt-4">
//               {/* Title */}
//               <p className="font-semibold text-lg mb-2">{data.title}</p>
//               {/* Price */}
//               <p className="text-xl text-gray-800">{data.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Second set of products (modified images and text) */}
//       <div className="flex justify-between gap-8 flex-wrap mt-8">
//         {secondProduct.map((data) => (
//           <div
//             key={data.id}
//             className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
//           >
//             {/* Image container */}
//             <div className="relative w-full h-[350px] mb-4 overflow-hidden">
//               <Image
//                 src={data.img_url}
//                 alt={data.title}
//                 width={305}
//                 height={350}
//                 objectFit="cover"
//                 quality={100}
//                 priority={true}
//                 className="w-full h-full"
//               />
//             </div>

//             {/* Title and Price container */}
//             <div className="flex flex-col items-center mt-4">
//               {/* Title */}
//               <p className="font-semibold text-lg mb-2">{data.title}</p>
//               {/* Price */}
//               <p className="text-xl text-gray-800">{data.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Third set of products (same as the first set) */}
//       <div className="flex justify-between gap-8 flex-wrap mt-8">
//         {product.map((data) => (
//           <div
//             key={data.id}
//             className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
//           >
//             {/* Image container */}
//             <div className="relative w-full h-[350px] mb-4 overflow-hidden">
//               <Image
//                 src={data.img_url}
//                 alt={data.title}
//                 width={305}
//                 height={350}
//                 objectFit="cover"
//                 quality={100}
//                 priority={true}
//                 className="w-full h-full"
//               />
//             </div>

//             {/* Title and Price container */}
//             <div className="flex flex-col items-center mt-4">
//               {/* Title */}
//               <p className="font-semibold text-lg mb-2">{data.title}</p>
//               {/* Price */}
//               <p className="text-xl text-gray-800">{data.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


















//========================================================================



// import React from 'react';
// import Image from "next/image";
// import { FaCaretDown } from "react-icons/fa"; // Import caret down icon
// import Link from "next/link"; // Import Link component from Next.js

// // Define first product list
// interface Iproducts {
//   title: string;
//   price: string;
//   img_url: string;
//   id: number;
// }

// let product: Iproducts[] = [
//   {
//     id: 1,
//     title: "The Dandy chair",
//     price: "£250",
//     img_url: "/Parent.png",
//   },
//   {
//     id: 2,
//     title: "Rustic Vase Set",
//     price: "£155",
//     img_url: "/Parent (1).png",
//   },
//   {
//     id: 3,
//     title: "The Silky Vase",
//     price: "£125",
//     img_url: "/Parent (2).png",
//   },
//   {
//     id: 4,
//     title: "The Lucy Lamp",
//     price: "£399",
//     img_url: "/Parent (3).png",
//   },
// ];

// // Define second set of product data (modify images and text here)
// let secondProduct: Iproducts[] = [
//   {
//     id: 1,
//     title: "",
//     price: "",
//     img_url: "/Product Card (1).png",
//   },
//   {
//     id: 2,
//     title: "",
//     price: "",
//     img_url: "/Product Card (2).png",
//   },
//   {
//     id: 3,
//     title: "",
//     price: "",
//     img_url: "/Product Card (3).png",
//   },
//   {
//     id: 4,
//     title: "",
//     price: "",
//     img_url: "/Product Card (4).png",
//   },
// ];

// const page = () => {
//   return (
//     <div>
//       {/* Image Section */}
//       <div>
//         <img 
//           src="/Frame 143.png" 
//           alt="Description of Image" 
//           style={{ width: "100%", height: "auto" }} 
//         />
//       </div>

//       {/* Product Info Section */}
//       <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* Left Section (Category, Product Type, Price, Brand) */}
//         <div>
//           <ul className="flex space-x-6">
//             {/* Category */}
//             <li className="flex items-center">
//               <span>Category</span> <FaCaretDown className="text-gray-600" />
//             </li>

//             {/* Product Type */}
//             <li className="flex items-center">
//               <span>Product Type</span> <FaCaretDown className="text-gray-600" />
//             </li>

//             {/* Price */}
//             <li className="flex items-center">
//               <span>Price</span> <FaCaretDown className="text-gray-600" />
//             </li>

//             {/* Brand */}
//             <li className="flex items-center">
//               <span>Brand</span> <FaCaretDown className="text-gray-600" />
//             </li>
//           </ul>
//         </div>

//         {/* Right Section (Sorting By and Date Added) */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//           {/* Sorting By */}
//           <div className="flex items-center">
//             <span>Sorting By</span> <FaCaretDown className="text-gray-600" />
//           </div>

//           {/* Date Added */}
//           <div className="flex items-center">
//             <span>Date Added</span> <FaCaretDown className="text-gray-600" />
//           </div>
//         </div>
//       </div>

//       {/* First set of products (original images) */}
      
//         <div className="flex justify-between gap-8 flex-wrap">
//           {product.map((data) => (
//             <div
//               key={data.id}
//               className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
//             >
//               {/* Image container */}
//               <div className="relative w-full h-[350px] mb-4 overflow-hidden">
//                 <Image
//                   src={data.img_url}
//                   alt={data.title}
//                   width={305}
//                   height={350}
//                   objectFit="cover"
//                   quality={100}
//                   priority={true}
//                   className="w-full h-full"
//                 />
//               </div>

//               {/* Title and Price container */}
//               <div className="flex flex-col items-center mt-4">
//                 {/* Title */}
//                 <p className="font-semibold text-lg mb-2">{data.title}</p>
//                 {/* Price */}
//                 <p className="text-xl text-gray-800">{data.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
      

//       {/* Second set of products (modified images and text) */}
      
//         <div className="flex justify-between gap-8 flex-wrap mt-8">
//           {secondProduct.map((data) => (
//             <div
//               key={data.id}
//               className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
//             >
//               {/* Image container */}
//               <div className="relative w-full h-[350px] mb-4 overflow-hidden">
//                 <Image
//                   src={data.img_url}
//                   alt={data.title}
//                   width={305}
//                   height={350}
//                   objectFit="cover"
//                   quality={100}
//                   priority={true}
//                   className="w-full h-full"
//                 />
//               </div>

//               {/* Title and Price container */}
//               <div className="flex flex-col items-center mt-4">
//                 {/* Title */}
//                 <p className="font-semibold text-lg mb-2">{data.title}</p>
//                 {/* Price */}
//                 <p className="text-xl text-gray-800">{data.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
      

//       {/* Third set of products (same as the first set) */}
//       <div className="w-full py-10">
//         <div className="flex justify-between gap-8 flex-wrap mt-8">
//           {product.map((data) => (
//             <div
//               key={data.id}
//               className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
//             >
//               {/* Image container */}
//               <div className="relative w-full h-[350px] mb-4 overflow-hidden">
//                 <Image
//                   src={data.img_url}
//                   alt={data.title}
//                   width={305}
//                   height={350}
//                   objectFit="cover"
//                   quality={100}
//                   priority={true}
//                   className="w-full h-full"
//                 />
//               </div>

//               {/* Title and Price container */}
//               <div className="flex flex-col items-center mt-4">
//                 {/* Title */}
//                 <p className="font-semibold text-lg mb-2">{data.title}</p>
//                 {/* Price */}
//                 <p className="text-xl text-gray-800">{data.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;











import React from 'react';
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa"; // Import caret down icon
import Link from "next/link"; // Import Link component from Next.js

// Define first product list
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

// Define second set of product data (modify images and text here)
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
      {/* Image Section */}
      <div>
        <img 
          src="/Frame 143.png" 
          alt="Description of Image" 
          style={{ width: "100%", height: "auto" }} 
        />
      </div>

      {/* Product Info Section */}
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Section (Category, Product Type, Price, Brand) */}
        <div>
          <ul className="flex space-x-6">
            {/* Category */}
            <li className="flex items-center">
              <span>Category</span> <FaCaretDown className="text-gray-600" />
            </li>

            {/* Product Type */}
            <li className="flex items-center">
              <span>Product Type</span> <FaCaretDown className="text-gray-600" />
            </li>

            {/* Price */}
            <li className="flex items-center">
              <span>Price</span> <FaCaretDown className="text-gray-600" />
            </li>

            {/* Brand */}
            <li className="flex items-center">
              <span>Brand</span> <FaCaretDown className="text-gray-600" />
            </li>
          </ul>
        </div>

        {/* Right Section (Sorting By and Date Added) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Sorting By */}
          <div className="flex items-center">
            <span>Sorting By</span> <FaCaretDown className="text-gray-600" />
          </div>

          {/* Date Added */}
          <div className="flex items-center">
            <span>Date Added</span> <FaCaretDown className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* First set of products (original images) */}
      <div className="flex justify-between gap-8 flex-wrap">
        {product.map((data) => (
          <div
            key={data.id}
            className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
          >
            {/* Image container */}
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

            {/* Title and Price container */}
            <div className="flex flex-col items-center mt-4">
              {/* Title */}
              <p className="font-semibold text-lg mb-2">{data.title}</p>
              {/* Price */}
              <p className="text-xl text-gray-800">{data.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second set of products (modified images and text) */}
      <div className="flex justify-between gap-8 flex-wrap mt-8">
        {secondProduct.map((data) => (
          <div
            key={data.id}
            className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
          >
            {/* Image container */}
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

            {/* Title and Price container */}
            <div className="flex flex-col items-center mt-4">
              {/* Title */}
              <p className="font-semibold text-lg mb-2">{data.title}</p>
              {/* Price */}
              <p className="text-xl text-gray-800">{data.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Third set of products (same as the first set) */}
      <div className="w-full py-10">
        <div className="flex justify-between gap-8 flex-wrap mt-8">
          {product.map((data) => (
            <div
              key={data.id}
              className="w-[305px] bg-transparent p-4 transition-all duration-300 hover:scale-105 flex flex-col overflow-hidden"
            >
              {/* Image container */}
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

              {/* Title and Price container */}
              <div className="flex flex-col items-center mt-4">
                {/* Title */}
                <p className="font-semibold text-lg mb-2">{data.title}</p>
                {/* Price */}
                <p className="text-xl text-gray-800">{data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mb-8 mt-1">
      
          <button className="bg-gray-200 text-black py-2 px-6 rounded-none hover:bg-gray-500 transition-all items-center">
            View Collection
          </button>
        
      </div>
    </div>
  );
};

export default page;
