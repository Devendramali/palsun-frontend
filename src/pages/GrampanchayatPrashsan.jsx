import { useEffect, useState } from "react";
import BigCards from "../component/cards/BigCards";
import Smallcards from "../component/cards/Smallcards";
import SectionHeader from "../component/SectionHeader";
import API from "../api/api";

const GrampanchayatPrashsan = () => {
  const [member, setMember] = useState([]);

  const bigMembers = member.filter(
    (item) =>
      item.isActive &&
      (item.role === "Sarpanch" ||
        item.role === "Upasarpanch" ||
        item.role === "ग्रामारोजगार सेवक"),
  );

  const smallMembers = member.filter(
    (item) =>
      item.isActive &&
      item.role !== "Sarpanch" &&
      item.role !== "Upasarpanch" &&
      item.role !== "ग्रामारोजगार सेवक",
  );

  useEffect(() => {
    API.get("/members")
      .then((res) => {
        // backend कडून आलेला data
        setMember(res.data);
      })
      .catch((err) => {
        console.error("Members fetch error:", err);
      });
  }, []);

  const [schoolCount, setSchoolCount] = useState({});
  useEffect(() => {
    API.get("/schoolcount")
      .then((res) => {
        // backend कडून आलेला data
        setSchoolCount(res.data);
      })
      .catch((err) => {
        console.error("school Count fetch error:", err);
      });
  }, []);

  const [staff, setStaff] = useState([]);
  useEffect(() => {
    API.get("/staff")
      .then((res) => {
        // backend कडून आलेला data
        setStaff(res.data);
      })
      .catch((err) => {
        console.error("school Count fetch error:", err);
      });
  }, []);
  return (
    <>
      <div className="grampanchayatmain bg-white bg-dot px-5 py-[90px]">
        <SectionHeader title="ग्रामपंचायत प्रशासन" classname="mb-[60px]" />
        <div className="m-auto flex flex-wrap gap-[40px] justify-center">
          {bigMembers.length > 0 ? (
            bigMembers.map((item) => <BigCards key={item._id} data={item} />)
          ) : (
            <p>Active nhi</p>
          )}
        </div>
        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          {smallMembers.length > 0 ? (
            smallMembers.map((item) => (
              <Smallcards key={item._id} data={item} />
            ))
          ) : (
            <p>Active nhi</p>
          )}
        </div>
      </div>

      <div className="bg-white py-[90px]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="md:col-span-7 col-span-12">
            <SectionHeader title="शासकीय शाळा मराठी" classname="mb-[30px]" />
            <div className="flex gap-2 justify-center items-center">
              <figure className="mb-0 bg-[#FD7E14] w-9 h-9 flex rounded-[50px] justify-center items-center">
                <img src="./icon1.svg" alt="" className="h-6 w-6" />
              </figure>
              <div>
                <h3 className="text-[20px] font-[700]">
                  जिल्हा परिषद प्राथमिक शाळा पळसुन केंद्र उमराण ता नवापुर जिल्हा
                  नंदुरबार
                </h3>
                <span className="font-[600] text-[14px]">स्थापना : 1955</span>
              </div>
            </div>
            <div className="mt-5">
              {schoolCount && (
                <div>
                  <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                    <p className="text-[14px] font-[600] text-[#555]">
                      शाळेतील मुल :
                    </p>
                    <p className="text-[14px] font-[600] text-[#ca00ff]">
                      {schoolCount.boys}
                    </p>
                  </div>
                  <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                    <p className="text-[14px] font-[600] text-[#555]">
                      शाळेतील मुली :
                    </p>
                    <p className="text-[14px] font-[600] text-[#ca00ff]">
                      {schoolCount.girls}
                    </p>
                  </div>
                  <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px]">
                    <p className="text-[14px] font-[600] text-[#555]">
                      एकूण शिक्षक :
                    </p>
                    <p className="text-[14px] font-[600] text-[#ca00ff]">
                      {schoolCount.totalTeacher}
                    </p>
                  </div>
                  <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                    <p className="text-[14px] font-[600] text-[#555]">
                      संपर्क :
                    </p>
                    <p className="text-[14px] font-[600] text-[#555]">
                      {schoolCount.contact}
                    </p>
                    {/* <p className="text-[14px] font-[600] text-[#ca00ff]">17</p> */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-5 col-span-12">
            <figure className="h-[100%] w-[100%]">
              <img src="./school.webp" alt="" className="h-[100%] w-[100%]" />
            </figure>
          </div>
        </div>
        <div className=" mt-12 px-6 flex justify-center">
          {staff.length > 0 ? (
            staff.map((item) => <Smallcards key={item._id} data={item} />)
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GrampanchayatPrashsan;