import error from '@/app/error'
import React from 'react'

const page = ({params}) => {

    let names=["jitu","seshu","immu"]

    // new error("err...")----->custom err

    if(names.includes(params.name)){
        return (
          <div>
            Profile : {params.name}
          </div>
        )
    }
    else{
        return(
            <div>
                Profile not found
            </div>
        )
    }
}

export default page
