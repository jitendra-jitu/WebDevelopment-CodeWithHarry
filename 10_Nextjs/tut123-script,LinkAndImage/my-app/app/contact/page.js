import React from 'react'
import Script from 'next/script'

const page = () => {
  return (
    <div>
      <Script>
        {`alert("welcome to contact page....");`}
      </Script>
      contact Page .... 
    </div>
  )
}

export default page

export const metadata = {
  title: "Contact Facebook",
  description: "Developed by Jituu....",
};
