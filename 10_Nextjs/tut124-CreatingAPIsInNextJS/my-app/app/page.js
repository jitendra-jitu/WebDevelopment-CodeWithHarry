"use client";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
        let data = {
          name: "Jitu",
          age: 25,
          college: "NRI Institute of Technology"
        };

    
      let res = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let resData = await res.json();
      console.log(resData);
      setResponse(resData);
   
  };

  return (
    <div>
      <h1>Next.js API DEMO</h1>
      <button type="button" onClick={handleClick}>Call API</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}
