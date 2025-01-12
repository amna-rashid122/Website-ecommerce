
import Brand from "@/components/Brand";
import Head from "@/components/Head";


import Products from "./product/Page";
import Popular from "./product/Popular";

// import Pro_detail from "./product/[id]/page";
 


export default function Home() {
  return (
  
    <div>
      
      
      <Head/>
      <Brand/>
      <Products/>
      <Popular/>
       {/* <Pro_detail/>  */}
    </div>
  
  );
}
