// "use client"
import Image from "next/image";
import fs from "fs/promises"
import Navbar from "./components/navbar";
// import { useState } from "react";


export default function Home() {

    // const [count, setcount] = useState(0);

    console.log("server-side Rerendering....")
    let read=fs.readFile("data.json");
    read.then((data)=>{
      console.log(data.toString());
    })

    return (
      <>
        <Navbar></Navbar>
        <div>i am the component...
          {/* {count} */}
          </div>
        {/* <button onClick={()=>setcount(count + 1)}>add count</button> */}

       
      </>
    );
    
}
