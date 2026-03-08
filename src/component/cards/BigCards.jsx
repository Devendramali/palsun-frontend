import {Phone} from "lucide-react"

const BigCards = ({data}) => {
  return (
    <>
    <div className='py-4 md:min-w-[340px] min-w-[100%] text-center bg-[#fff] px-8 py-8 rounded-[24px] shadow-[0px_0px_12px_#bfbfbf]' >
        <figure className='h-40 w-40 m-auto mb-[30px] rounded-[50%] overflow-hidden'>
            <img src={data.image} alt="" className='w-[100%] h-[100%] object-cover ' />
        </figure>
        <h2 className='text-[22px] mb-3 font-[700]'>{data.name}</h2>
        <p className='text-[16px]'>{data.role}</p>
        {
            data.contact && (

        <div className="mt-3">
            <p className='flex gap-2 justify-center items-center'><Phone color="#FD7E14" size={18}/>{data.contact} | संपर्क माहिती</p>
        </div>
            )
        }

    </div>
    </>
  )
}

export default BigCards