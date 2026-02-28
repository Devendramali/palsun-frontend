import { useEffect, useState } from "react";
import Simplebox from "./cards/Simplebox";
import API from "../api/api";

const ImportantLinks = () => {
  // const impLinks = [
  //   { id: 1, name: "Train Booking", url: "https://www.irctc.co.in/nget/train-search" },
  //   {
  //     id: 2,
  //     name: "Passport Application",
  //     url: "https://www.passportindia.gov.in/psp",
  //   },
  //   { id: 3, name: "Driving License / RC", url: "https://parivahan.gov.in/" },
  //   { id: 4, name: "Voter ID Services", url: "https://voterportal.eci.gov.in/" },
  //   { id: 5, name: "Digilocker", url: "https://www.digilocker.gov.in/" },
  //   { id: 6, name: "CSC Portal", url: "https://sewa.csc.gov.in/" },
  //   { id: 7, name: "PM-KISAN", url: "https://pmkisan.gov.in/" },
  //   { id: 8, name: "Track DBT payments", url: "https://pfms.nic.in/Home.aspx" },
  //   { id: 9, name: "UPI & Digital Finance (NPCI)", url: "https://www.npci.org.in/" },
  //   { id: 10, name: "Insurance Schemes – PMJJBY, PMSBY, APY", url: "https://jansuraksha.gov.in/" },
  //   { id: 11, name: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in/" },
  //   { id: 12, name: "National Testing Agency exams", url: "https://nta.ac.in/" },
  //   { id: 13, name: "NCERT textbooks", url: "https://ncert.nic.in/" },
  //   { id: 14, name: "UGC updates", url: "https://www.ugc.gov.in/" },
  //   { id: 15, name: "CBSE Board info", url: "https://www.cbse.gov.in/" },
  //   { id: 16, name: "Ayushman Bharat (PM-JAY)", url: "https://ayushmanbharat.gov.in/" },
  //   { id: 17, name: "Ministry of Health", url: "https://mohfw.gov.in/" },
  //   {
  //     id: 18,
  //     name: "Social Justice Schemes",
  //     url: "https://socialjustice.gov.in/",
  //   },
  //   { id: 19, name: "	CPGRAMS (complaints)", url: "https://pgportal.gov.in/" },
  //   { id: 20, name: "RTI Online", url: "https://rtionline.gov.in/" },
  //   { id: 21, name: "eCourts (Case status)", url: "https://ecourts.gov.in/ecourts_home/" },
  //   { id: 22, name: "Consumer Helpline", url: "https://consumerhelpline.gov.in/public/" },

  //   { id: 23, name: "India.gov.in (Govt Portal)", url: "https://india.gov.in/" },
  //   { id: 24, name: "MyGov platform", url: "https://www.mygov.in/" },
  //   { id: 25, name: "Aadhaar Services", url: "https://uidai.gov.in/" },
  //   { id: 26, name: "PM India website", url: "https://www.pmindia.gov.in/en/" },
  //   { id: 27, name: "MGNREGA job card info", url: "https://nrega.nic.in/" },
  //   { id: 28, name: "Income Tax Filing & PAN", url: "https://incometax.gov.in/" },
  //   { id: 29, name: "EPFO – PF & UAN", url: "https://www.epfindia.gov.in/site_en/index.php" },
  //   { id: 30, name: "e-SHRAM card for unorganized workers", url: "https://eshram.gov.in/" },
  //   { id: 31, name: "PAN & TDS services", url: "https://tin-nsdl.com/" },
  // ];
  const [impLinks, setImpLinks] = useState([]);
  const ImpLinksList = impLinks.filter((item)=> item.isActive);

  
  useEffect(() => {
    API.get("/implinks")
      .then((res) => {
        // backend कडून आलेला data
        setImpLinks(res.data);
      })
      .catch((err) => {
        console.error("Important links fetch error:", err);
      });
  }, []);
  
  return (
    <>
      <div className="bg-[#fff3e0] flex flex-col items-center">
        <Simplebox title="🔗 जनसुविधा लिंक्स" subtitle="महत्वाच्या शासकीय लिंक्स" text="तुमच्या गरजेनुसार उपयुक्त व खात्रीशीर पोर्टल्स"/>
        <div className="bg-white my-4 p-2 w-4xl border border-zinc-300 rounded-sm">
          <div className="bg-[#E65100] text-white text-[10px] p-2 font-bold text-center">
            जनसुविधेसाठी महत्वाच्या लिंक्स
          </div>
          <div className="my-1">
            <table className="w-full border-collapse">
              <thead className="">
                <tr>
                  <th className="p-2 text-[11px] w-16 text-center">क्र.</th>
                  <th className="p-2 text-[11px] text-left">सेवेचे नाव</th>
                  <th className="p-2 text-[11px] text-left">लिंक</th>
                </tr>
              </thead>
              <tbody>
                {
                  ImpLinksList.length > 0 ? (
                    impLinks.map((item,index) => (
                  <tr key={item._id} className="hover:bg-orange-50">
                    <td className="border border-[#dee2e6] text-[11px] p-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-[#dee2e6] text-[11px] p-2">
                      {item.title}
                    </td>
                    <td className="border border-[#dee2e6] text-[11px] p-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        {item.link}
                      </a>
                    </td>
                  </tr>
                ))
                  ) : 
                  (
                  <tr className="hover:bg-orange-50">
                    <td></td>
                    <td><div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div></td>
                    <td></td>
                  </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantLinks;
