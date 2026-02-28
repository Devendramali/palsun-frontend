import { useEffect, useState } from "react";
import SectionHeader from "../component/SectionHeader";
import { Search, Volume2 } from "lucide-react";
import Suchanacard from "../component/cards/Suchanacard";
import API from "../api/api";

const Notices = () => {
  const [searchText, setsearchText] = useState("");
  const [notices, setNotices] = useState([]);

    useEffect(() => {
    API.get("/notices")
      .then((res) => {
        // backend कडून आलेला data
        setNotices(res.data);
      })
      .catch((err) => {
        console.error("notices fetch error:", err);
      });
  }, []);

  const filteredNotices = notices.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.discription.toLowerCase().includes(searchText.toLowerCase()) ||
      item.date.includes(searchText),
  );

  const noticesList = filteredNotices.filter((item) => item.isActive);

  return (
    <>
      <div className=" bg-[#f6f7fa] px-5 py-[90px]">
        <div className="flex justify-center gap-3">
          <img src="./announsc.png" className="h-13" alt="" />
          <SectionHeader title="सूचना" />
        </div>
        <div className="max-w-[1000px] mt-[60px] m-auto">
          <div className="search flex justify-center items-center gap-4">
            <input
              type="search"
              className="bg-[#fff] py-2 px-4 border border-[1px] border-[#ff7400]  focus:outline-none 
             focus:ring-0  rounded-[8px]
             focus:border-[#ff7400] w-[100%] lg:w-[700px]"
              name=""
              placeholder="येथे सूचना शोधा...."
              id=""
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
            />
            <button className="bg-[#ffc9a0] h-10 w-11 flex justify-center items-center rounded-[8px]">
              <Search color="#595450" />
            </button>
          </div>
          <p className="text-center mt-2 text-[#595450] text-[14px]">
            गावातील रहिवाशांसाठी नवीनतम अपडेट्स आणि महत्वाची माहिती.
          </p>
          <div className="mt-[60px]">
            {filteredNotices.length === 0 && (
              <p className="text-center text-[#595450]">
                कोणतीही सूचना सापडली नाही 😕
              </p>
            )}
            {
              noticesList.length > 0 ? (noticesList.map((item) => (
              <Suchanacard key={item._id} data={item} />
            ))):(<div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;


