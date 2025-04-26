"use client"
import { SubmitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {

  let ref=useRef()

  // const SubmitAction=async (e)=>{
  //   "use server"
  //   fs.writeFile("tesing.txt",`fecthed detils from the form name: ${e.get("name")},email : ${e.get("email")}`)
  //   console.log("name:",e.get("name"),"--> email:",e.get("email"));
  // }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <form ref={ref} action={(e)=>{SubmitAction(e); ref.current.reset()}} className="flex flex-col justify-center items-center h-[100vh]" >

        <div className="flex flex-col gap-4">
          <label className="text-lg font-bold " htmlFor="name">Name:</label>
          <input className="text-black" type="text" name="name" id="" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-lg font-bold ">email</label>
          <input type="text" className="text-black"name="email" id="" />
        </div>
        <button className="bg-orange-500 px-3 py-1 m-2">Submit..</button>
      </form>
    </div>
  );
}
