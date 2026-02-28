import {  FileMinus2, FileText } from "lucide-react"
import SectionHeader from "../component/SectionHeader"
import { useEffect, useState } from "react";
import API from "../api/api";
const MahitiAdhikar = () => {
   // आमचे प्रशासकीय अधिकारी
  const [info, setInfo] = useState([]);
  const infoList= info.filter((item) => item.isActive);

  useEffect(() => {
    API.get("/mahiti")
      .then((res) => {
        // backend कडून आलेला data
        setInfo(res.data);
      })
      .catch((err) => {
        console.error("Info fetch error:", err);
      });
  }, []);
  return (
    <>
      <div className="py-[90px]">
        <SectionHeader title="माहिती अधिकार"/>

        <div className="px-6 flex flex-wrap max-w-[1000px] m-auto justify-center gap-6 mt-[60px]">
          {
            infoList.length > 0 ? infoList.map((item) => (
              <div key={item.id} className="h-[250px] rounded-[16px] p-3 flex justify-center items-center flex-col w-[200px] bg-white">
                <FileText size={80} className="" color="#dc3545"/>
                <p className="mt-8 text-[14px] text-center">{item.title}</p>
                <button onClick={() => window.open(item.file, "_blank")} className="bg-orange-500 text-white text-[14px] mt-5  px-5 py-2 rounded-xl">
                  Open PDF
                </button>
              </div>
            )) : (<div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>)
          }
        </div>

      </div>
    </>
  )
}

export default MahitiAdhikar