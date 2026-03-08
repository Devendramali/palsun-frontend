import { useEffect, useState } from "react";
import API from "../../api/api";
import SectionHeader from "../../component/SectionHeader";
import { FileDown } from "lucide-react";

const GovDecision = () => {

  const [data,setData] = useState([])
  const nirnay= data.filter((item) => item.isActive);


  useEffect(() => {
    API.get("/shashanNirnay")
      .then((res) => {
        // backend कडून आलेला data
        setData(res.data);
      })
      .catch((err) => {
        console.error("shashanNirnay fetch error:", err);
      });
  }, []);

  return (
    <div className="bg-[#f6f7fa] min-h-[60vh] flex flex-col items-center px-4 py-10">
      
      <SectionHeader
        title="शासन निर्णय"
        classname="text-zinc-500 py-5 text-center"
      />

      {
        nirnay.length > 0 ? nirnay.map((item) => (
        <div key={item._id} className="w-full max-w-[800px] mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-[10px] px-4 py-3 shadow-sm">
          
        <div className="flex items-center">
          <div className="bg-orange-400 w-[40px] h-[40px] flex justify-center items-center rounded-full text-white">
            <FileDown size={18} />
          </div>

          <div className="pl-3 font-bold text-[13px] sm:text-sm">
            {item.title}
          </div>
        </div>

        <a
          href={item.file}
          target="_blank"
          className="px-5 py-2 text-center font-bold text-[13px] cursor-pointer rounded-2xl border border-amber-500 hover:bg-amber-500 hover:text-white transition"
        >
          डाउनलोड
        </a>

      </div>)):(<div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>)
      }

    </div>
  );
};

export default GovDecision;