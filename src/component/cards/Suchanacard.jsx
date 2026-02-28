import { Volume2 } from "lucide-react"

const Suchanacard = ({data}) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
  return (
    <>
      <div key={data.id} className="flex md:flex-row flex-col shadow-[0px_0px_12px_#bfbfbf] rounded-[15px] mb-6">
                <figure className="mb-0 max-h-[200px] md:w-[30%] w-[100%] md:mb-0 mb-3">
                    <img src={data.image} className="object-fit rounded-l-[15px] h-full w-full" alt="" />
                </figure>
                <div className="p-4 md:w-[70%] w-[100%] max-h-[200px] flex flex-col justify-between">
                  <div className="">
                    <h3 className="flex gap-2 text-[#FD7E14] font-[700] mb-4"> <Volume2 color="#FD7E14"/> {data.title}</h3>
                    <p className="text-[12px]">{data.subtitle}</p>
                  </div>
                  <p className="text-right text-[13px] text-[#FD7E14] font-[700]">{formatDate(data.date)}</p>

                </div>
              </div>
    </>
  )
}

export default Suchanacard