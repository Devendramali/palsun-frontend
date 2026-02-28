import { useEffect, useState } from "react";
import Box from "../component/cards/Box";
import SectionHeader from "../component/SectionHeader";
import API from "../api/api";

const JamaKharchPatrak = () => {
  const [annualReport, setAnnualReport] = useState([]);
  const annualReportsList = annualReport.filter((item) => item.isActive);

  useEffect(() => {
    API.get("/expenditure")
      .then((res) => {
        // setAnnualReport कडून आलेला data
        setAnnualReport(res.data);
      })
      .catch((err) => {
        console.error("Annual Report fetch error:", err);
      });
  }, []);

  return (
    <>
      <div className="bg-[#fef3e6] h-[67vh] flex flex-col justify-center items-center">
        <h2>
          <SectionHeader
            title="जमा खर्च पत्रक"
            classname="text-[#e65100] py-5"
          />
        </h2>
        {/* <Box classname='bg-white w-sm border border-2 border-orange-400 border-dashed' title="जमा खर्च पत्रकामध्ये अद्याप कोणतीही माहिती जोडलेली नाही."/> */}
        <div
      className="flex gap-3 flex-wrap"
        >
          {annualReportsList.length > 0 ? (
            annualReportsList.map((report, index) => (
              <div     className="w-[250px] rounded-xl border-orange-400 border-1 transition-all 
            duration-300 
            ease-in-out 
            hover:scale-105 
            hover:shadow-xl">
                <div
                  key={index}
                  className="bg-orange-400 text-center py-2 px-3 text-base text-gray-900 rounded rounded-t-xl font-bold"
                >
                  <h2 className="text-[14px] lg:text-[16px]">{report.title}</h2>
                </div>
                <div className="px-3 bg-white">
                  <div
                    key={index}
                    className="flex text-[11px] gap-2 p-2 justify-between border-zinc-500 border-dotted border-b-1"
                  >
                    <p className={`p-1`} key={index}>
                      जमा रक्कम (₹):
                    </p>
                    <p className={`p-1 text-[#28a745]`} key={index}>
                      {report.depositAmount}
                    </p>
                  </div>
                  <div
                    key={index}
                    className="flex text-[11px] gap-2 p-2 justify-between border-zinc-500 border-dotted border-b-1"
                  >
                    <p className={`p-1`} key={index}>
                      खर्च रक्कम (₹):
                    </p>
                    <p className={`p-1 text-[#dc3545]`} key={index}>
                      {report.expenditureAmount}
                    </p>
                  </div>
                  <div
                    key={index}
                    className="flex text-[11px] gap-2 p-2 justify-between border-zinc-500 border-dotted border-b-1"
                  >
                    <p className={`p-1`} key={index}>
                      शिल्लक रक्कम (₹):
                    </p>
                    <p className={`p-1 text-[#007bff]`} key={index}>
                      {report.balanceAmount}
                    </p>
                  </div>
                </div>
                <div className="bg-transparent p-3 mx-auto text-center flex justify-center">
                  <button className="bg-orange-400 text-white px-4 py-1 rounded-md text-[11px]">
                    <a href={report.pdf} target="_blank" rel="noopener noreferrer">
                      PDF डाउनलोड करा
                      </a>
                  </button>
                </div>
              </div>
            ))
          ) : (
           <div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>
          )}
        </div>
      </div>
    </>
  );
};

export default JamaKharchPatrak;
