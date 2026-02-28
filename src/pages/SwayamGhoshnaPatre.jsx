import { useEffect, useState } from "react";
import Simplebox from "../component/cards/Simplebox";
import API from "../api/api";
const SwayamGhoshnaPatre = () => {
  const [certificates, setCertificates] = useState([]);
  const certificatesList = certificates.filter((item) => item.isActive);
  
  useEffect(() => {
    API.get("/swayamGhoshna")
      .then((res) => {
        // backend कडून आलेला data
        setCertificates(res.data);
      })
      .catch((err) => {
        console.error("Certificates fetch error:", err);
      });
  }, []);

  // const certificates = [
  //   "कोणत्याही योजनेचा लाभ न घेतल्याचे स्वयंघोषणापत्र",
  //   "परित्यक्ता असल्याबाबत स्वयंघोषणापत्र",
  //   "रहिवासी दाखला स्वयंघोषणापत्र",
  //   "विधवा असल्याबाबत स्वयंघोषणापत्र",
  //   "विवाह कुटुंब असल्यास स्वयंघोषणापत्र",
  //   "वीज जोडणी स्वयंघोषणापत्र",
  //   "शौचालय असल्याबाबत स्वयंघोषणापत्र",
  //   "हयात असल्याबाबत स्वयंघोषणापत्र",
  // ];
  return (
    <>
      <section className="bg-[#FFF6EE] py-6">
        <Simplebox className="" 
          title="📄 स्वयंघोषणापत्रे"
          subtitle="PDF स्वरूपातील स्वयंघोषणापत्रे"
          text="खालील फॉर्म डाऊनलोड करून आवश्यकतेनुसार वापरावेत."
        />
        <div className="max-w-5xl mt-5 mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesList.length > 0 ? (
              certificatesList.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md px-6 py-10 text-center  flex flex-col justify-between hover:shadow-xl transition"
              >
                <h3 className="text-[12px] lg:text-[15px] sm:text-[14px] font-semibold text-gray-800 mb-6 leading-relaxed">
                  {item.title}
                </h3>

                <button className="mx-auto bg-orange-600 hover:bg-orange-700 cursor-pointer text-white px-6 py-2 rounded-full text-sm font-medium transition">
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer">डाउनलोड करा</a>
                </button>
              </div>
            ))
            ):(<div className="w-full flex justify-center items-center"><p className="text-xl text-center">सध्या ही माहिती उपलब्ध नाही. </p></div>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default SwayamGhoshnaPatre;
