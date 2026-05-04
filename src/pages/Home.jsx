import { useEffect, useState } from "react";
import { AiOutlineBook } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import VillageCard from "../component/cards/VillageCard";
import Suchanacard from "../component/cards/Suchanacard";
import SectionHeader from "../component/SectionHeader";
import Herobanner from "../component/Herobanner";
import MediumCard from "../component/cards/MediumCard";
import BigCards from "../component/cards/BigCards";
import Card from "../component/cards/Card";
import Button from "../component/cards/Button";
import API from "../api/api";


const cards = [
  {
    icon: <AiOutlineBook className="text-orange-400 text-3xl" />,
    title: "स्मार्ट ग्राम",
    desc: "जिल्हास्तरीय स्मार्ट ग्रामपंचायत पुरस्कार मिळाला",
  },
  {
    icon: <BiDesktop className="text-orange-400 text-3xl" />,
    title: "संयोजना",
    desc: "ग्रामपंचायतकप अंतर्गत कॅबडी स्पर्धांचे आयोजन",
  },
  {
    icon: <GiTrophyCup className="text-orange-400 text-3xl" />,
    title: "पुरस्कार",
    desc: "माझी वसुंधरा अभियान अंतर्गत राज्यस्तरीय पुरस्कार प्राप्त",
  },
  {
    icon: <FaHeart className="text-orange-400 text-3xl" />,
    title: "सहभाग",
    desc: "लोकसहभाग आणि श्रमदानाच्या माध्यमातून रविवारी 100 हून अधिक गावं सतत स्वच्छ करा.",
  },
];

const Home = () => {
  // slider sathi.
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  const activeSlide = slides.filter((item) => item.isActive);

  // slider sathi useEffect
  useEffect(() => {
    API.get("/banner")
      .then((res) => {
        // backend कडून आलेला data
        console.log(res.data);
        setSlides(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error("Banner fetch error:", err);
      });
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides]);

  // Suvichar part
  const [suvichar, setSuvichar] = useState([]);
  useEffect(() => {
    API.get("/suvichar")
      .then((res) => {
        // backend कडून आलेला data
        setSuvichar(res.data);
      })
      .catch((err) => {
        console.error("suvichar fetch error:", err);
      });
  }, []);

  // ग्रामपंचायतीचे माननीय सदस्य
  const [member, setMember] = useState([]);
  const administration = member.filter(
    (item) =>
      item.isActive &&
      (item.role === "सरपंच" || item.role === "उपसरपंच"),
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

  // आमचे प्रशासकीय अधिकारी
  const [officers, setOfficers] = useState([]);
  const officersList = officers.filter((item) => item.isActive);

  useEffect(() => {
    API.get("/officers")
      .then((res) => {
        // backend कडून आलेला data
        setOfficers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Officers fetch error:", err);
      });
  }, []);

  // Notices state sathi.
  const [notices, setNotices] = useState([]);
  const noticesList = slides.filter((item) => item.isActive);

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

  // Gallery
  const [popupItem, setPopupItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  // fetch gallery from backend
  useEffect(() => {
    API.get("/gallery")
      .then((res) => {
        const activeItems = res.data.filter((item) => item.isActive);
        setGalleryItems(activeItems);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
      });
  }, []);

  // Mahiti Adhikari.
  const [leaders, setLeaders] = useState([]);

  const firstRow = leaders.slice(0, 5);
  const lastRow = leaders.slice(5);

  useEffect(() => {
    API.get("/mananiy-adhikari")
      .then((res) => {
        setLeaders(res.data);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
      });
  }, []);
  return (
    <>
      <div className="relative w-full h-[350px] sm:h-full md:h-[400px] lg:h-full aspect-[calc(2*3+1)/3] overflow-hidden">
        {activeSlide.length > 0 ? (
          activeSlide.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              // style={{
              //    backgroundImage: `url(${slide.image})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <img src={slide.image} className="absolute inset-0 w-full h-full object-cover" alt="" />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* content */}
              <div className="absolute left-6 md:left-16 bottom-24 text-white max-w-xl">
                <h4 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">ग्रामपंचायत</h4>
                {/* <h3>{`${slide.image}`}</h3> */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                  पळसुन
                </h1>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-base leading-relaxed">
                  {slide.title}
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-base leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">
                    <span className="font-bold text-orange-400">
                      28 +{" "}
                    </span>
                    एकूण गाव कार्यक्रम
                  </p>
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-base">
                    <span className="font-bold text-orange-400">
                     1547 +
                    </span>
                    गावाची लोकसंख्या
                  </p>
                </div>
              </div>

              {/* <div className="absolute right-10 bottom-10">
                <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-md text-sm text-white font-medium">
                  💳 Pay Now
                </button>
              </div> */}
            </div>
          ))
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <p className="text-black text-center">
              सध्या ही माहिती उपलब्ध नाही.
            </p>
          </div>
        )}

        {/* dots navigation – हे main div च्या आत ठेवायचं */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3">
          {activeSlide.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-5 rounded-2xl cursor-pointer ${
                i === current ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="bg-white w-full py-3 px-3 sm:px-6">
        <div className="max-w-7xl bg-[#FEEFDD] mx-auto flex flex-col lg:flex-row items-center gap-3 overflow-hidden">
          <div className="bg-orange-600 md:w-fit w-full text-center md:justify-start justify-center text-white px-4 py-2 flex items-center gap-2 shrink-0">
            <span className="text-lg">📢</span>
            <span className="font-semibold text-sm sm:text-base">
              आजचा सुविचार:
            </span>
          </div>

          <div className="relative w-full overflow-hidden">
            <p className="whitespace-nowrap animate-marquee text-sm sm:text-base text-gray-800">
              {suvichar.map((item, index) => (
                <span key={index}>🌸 {item.text} 🌸</span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* -------- */}
      <div className="max-w-[1300px] mx-auto px-4 py-5 sm:py-10 md:py-15 lg:py-16">
        {/* FIRST ROW */}
        <SectionHeader
          title="माननीय मंत्री व पदाधिकारी"
          classname="mb-4 sm:mb-[30px] md:mb-[40px] lg:mb-[60px] underline1"
        />
        <div
          className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5 
        justify-items-center"
        >
          {firstRow.map((item, index) => (
            <Card
              key={index}
              item={item}
              raised={index === 1 || index === 2 || index === 3}
            />
          ))}
        </div>

        {/* LAST ROW CENTER */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {lastRow.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      {/* ------------- */}

      <div className="px-4 py-5 sm:py-10 md:py-15 lg:py-16 bg-[#fff]">
        <SectionHeader
          title="आमचे प्रशासकीय अधिकारी"
          classname="mb-4 sm:mb-[30px] md:mb-[40px] lg:mb-[60px] underline1"
        />
        <div className="m-auto flex justify-center gap-5">
          {officersList.length > 0 ? (
            officers.map((item) => <MediumCard key={item._id} data={item} />)
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p>
            </div>
          )}
        </div>
      </div>

      <div className="grampanchayatmain px-6 bg-[#f6f7fa] px-4 py-5 sm:py-10 md:py-15 lg:py-16">
        <SectionHeader
          title="ग्रामपंचायतीचे माननीय सदस्य"
          classname="mb-4 sm:mb-[30px] md:mb-[40px] lg:mb-[60px]"
        />
        <div className="m-auto max-w-[1000px] flex-wrap flex gap-[40px] justify-center">
          {administration.length > 0 ? (
            administration.map((item) => (
              <BigCards key={item._id} data={item} />
            ))
          ) : (
            <div className="flex justify-center items-center">
              <p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p>
            </div>
          )}
        </div>
        <div className="w-full flex justify-center mt-10">
          <Button href="/GrampanchayatPrashsan" text="अधिक पहा..." />
        </div>
      </div>

      <div className="px-4 py-8 sm:py-10 md:py-15 lg:py-16 px-5 bg-[#fff]">
        <div className="flex flex-col lg:flex-row max-w-[1200px] m-auto">
          <div className="py-5 lg:py-0">
            <span className="text-[14px]">आमच्याबद्दल जाणून घ्या</span>
            <SectionHeader
              title="ग्रामपंचायतीचे माननीय सदस्य"
              classname="mb-[20px] text-left "
            />
            <p className="text-[15px]">
              ही ग्रामपंचायत संबंधित पंचायत समिती अंतर्गत कार्यरत असून तिच्या
              अखत्यारीत ३ गावे समाविष्ट आहेत...नागरिक माहिती{" "}
            </p>
            <div className="w-full flex justify-start my-5">
              <Button href="/about" text="अधिक पहा..." />
            </div>
          </div>
          <div className="relative lg:min-w-[500px]">
            <img
              src="./about1.webp"
              className="w-full lg:w-[350px] bg-[#fff] p-1 rounded-[24px] shadow-[1px_1px_12px_#bfbfbf]"
              alt=""
            />
            <img
              src="./about2.webp"
              className="w-full mt-2 lg:w-[350px] lg:absolute lg:top-[80px] bg-[#fff] p-1 rounded-[24px] shadow-[1px_1px_12px_#bfbfbf] right-0"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="py-2">
          <SectionHeader title="विशेष आकर्षणे" classname="sm:mb-[30px] md:mb-[40px] lg:mb-[60px]" />
        </div>
        <div className="w-full lg:px-15 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
          {cards.map((card, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-left mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-7">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 px-5 w-full flex flex-col justify-center">
        <div className="py-2">
          <SectionHeader
            title="आमचे कार्यक्रम म्हणजे गावाला सक्षम, स्वयंपूर्ण आणि आधुनिक बनवण्याचा एक सामूहिक प्रयत्न आहे"
            classname="mb-[30px]"
          />
        </div>
        <VillageCard />
        <div className="w-full flex justify-center my-5">
          <Button text="अधिक पहा..." href="/village-programs" />
        </div>
      </div>

      <div className="bg-pink-50 px-4 pt-5 sm:py-10 md:py-15 lg:py-16">
        <div>
          <SectionHeader title="ग्रामपंचायतीच्या सूचना" classname="mb-[0px]" />
        </div>
        <div className="mt-[60px] max-w-[1200px] m-auto px-6">
          {noticesList.length === 0 && (
            <p className="text-center text-[#595450]">
              कोणतीही सूचना सापडली नाही 😕
            </p>
          )}
          {notices.map((item) => (
            <Suchanacard key={item._id} data={item} />
          ))}
        </div>
        <div className="w-full flex justify-center my-5">
          <Button text="अधिक पहा..." href="/notices" />
        </div>
      </div>

      <div className="pt-5">
        <div>
          <SectionHeader title="फोटो गॅलरी" classname="mb-[15px]" />
        </div>

        <p className="text-[14px] text-zinc-700 text-center">
          ग्रामीण जीवन, घटना आणि नैसर्गिक सौंदर्याची झलक.
        </p>

        {/* 👇 इथे gallery cards */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {galleryItems.slice(0, 3).map((item) => (
            <div
              key={item._id}
              className="max-w-2xl rounded-xl overflow-hidden shadow-[1px_1px_12px_#bfbfbf]"
            >
              <div
                className="overflow-hidden rounded-t-xl cursor-pointer group"
                onClick={() => setPopupItem(item)}
              >
                <img
                  src={`${item.file}`}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="bg-white p-2">
                <p className="text-[13px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center my-5">
          <Button href="/gallery" text="अधिक पहा..." />
        </div>

        <Herobanner />

        {/* popup */}
        {popupItem && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-xl">
              <img
                src={popupItem.file}
                alt={popupItem.title}
                className="w-full rounded"
              />
              <p className="mt-2">{popupItem.title}</p>
              <button
                onClick={() => setPopupItem(null)}
                className="mt-3 bg-gray-600 text-white px-4 py-2 rounded"
              >
                बंद करा
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;