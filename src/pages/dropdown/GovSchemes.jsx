import { useEffect, useState } from "react";
import SectionHeader from "../../component/SectionHeader";
import API from "../../api/api";
import { NavLink } from "react-router-dom";

const GovSchemes = () => {
  const [govSchemes, setGovSchemes] = useState([]);
  const govschemsList = govSchemes.filter((item) => item.isActive);

  
    useEffect(() => {
      API.get("/govPrograms")
        .then((res) => {
          // backend कडून आलेला data
          setGovSchemes(res.data);
        })
        .catch((err) => {
          console.error("Goverment fetch error:", err);
        });
    }, []);
  return (
    <>
      <div className=" bg-white">
        <section className="relative w-full bg-[#FFF1E6] overflow-hidden">
          {/* Left Circle */}
          <div className="absolute -left-32 top-1/2 -translate-y-1/2  w-72 h-72 bg-[#FFE1CC] rounded-full hidden md:block"></div>

          {/* Right Circle */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFE1CC] rounded-full hidden md:block"></div>

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              <SectionHeader title="शासकीय योजना" />
            </h1>

            <p className="inline-block bg-[#FFD7BE] px-4 py-2 text-sm md:text-base text-gray-800 rounded">
              विविध विकास योजनांच्या माध्यमातून आमच्या समुदायाला सक्षम बनवणे आणि
              प्रत्येक नागरिकाला सरकारी योजनांचा लाभ मिळवून देणे
            </p>
          </div>
        </section>
        <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            govschemsList.length > 0 ? (govschemsList.map((item) => (
            <div
              key={item.id}
              className={`${item._id === 4 ? "lg:col-span-3 flex justify-center" : ""}`}
            >
              <div className="w-full border-none max-w-sm bg-white rounded-2xl shadow-zinc-400 shadow-lg border p-8 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-3xl text-white mb-4">
                  {/* {item.icon} dilela nhiye routes madhe.*/}
                </div>

                <h3 className="text-sm font-bold mb-2">{item.title}</h3>
                <p className="text-[12px] text-gray-600 mb-3">{item.subtitle}</p>

                <span className="text-orange-600 text-sm font-medium cursor-pointer hover:underline">
                  <a href={item.link} target="_blank">सविस्तर वाचा</a>
                </span>

                <div className="w-full h-px bg-orange-200 my-6"></div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-[12px] font-semibold">
                  <NavLink to="/contact">संपर्कासाठी →</NavLink>
                </button>
              </div>
            </div>
          ))) : (<div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>)
          }
        </div>
      </div>
    </section>
      </div>
      
    </>
  );
};

export default GovSchemes;
