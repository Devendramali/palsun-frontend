import React from 'react'
import { Phone } from "lucide-react"

const MediumCard = ({ data }) => {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    return (
        <>
            <div className='bg-transparent max-w-[240px] rotatecard text-center overflow-hidden relative rounded-[24px] shadow-[0px_0px_12px_#bfbfbf]' >
                <div className='frontpanel bg-[#fff] px-8 py-8 rounded-[24px]'>
                    <figure className='h-25 w-25 m-auto mb-[30px] rounded-[50%] overflow-hidden border-[5px] border-gray-200'>
                        <img src={`${data.image}`} alt="" className='w-[100%] h-[100%] object-cover' />
                    </figure>
                    <h2 className='text-[18px] mb-3 font-[700]'>{data.name}</h2>
                    <p className='text-[16px]'>{data.post}</p>
                </div>
                <div className='backpanel absolute h-full w-full flex justify-center items-center top-0 left-0 bg-[linear-gradient(45deg,#E09A00,#FD7E14)] text-white'>
                    {
                        data.contact && (

                            <div className="mt-3">
                                <h3 className='mb-3 text-[20px]'> संपर्क माहिती</h3>
                                <p className='flex gap-2 justify-center items-center'><Phone color="#fff" size={18} />{data.contact} </p>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default MediumCard