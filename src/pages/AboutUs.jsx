import { useEffect, useState } from "react";
import MainHeading from "../component/MainHeading";
import SectionHeader from "../component/SectionHeader";
import BigCards from "../component/cards/BigCards";
import Box from "../component/cards/Box";
import MediumCard from "../component/cards/MediumCard";
import Smallcards from "../component/cards/Smallcards";
import API from "../api/api";

const AboutUs = () => {
  // आमचे प्रशासकीय अधिकारी
  const [officers, setOfficers] = useState([]);
  const officersList = officers.filter((item) => item.isActive);

  useEffect(() => {
    API.get("/officers")
      .then((res) => {
        // backend कडून आलेला data
        setOfficers(res.data);
      })
      .catch((err) => {
        console.error("Officers fetch error:", err);
      });
  }, []);

  // members
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
  return (
    <>
      <div className="px-6 page py-[90px] bg-white">
        <div className="max-w-[1100px] flex flex-col justify-center lg:flex-row m-auto gap-8 flex ">
          <div className="text-left">
            <MainHeading
              title="आमच्या बाबत"
              subheading="भारतातील बहुतेक खेडी ही त्यांच्या ग्रामपंचायतीच्या अखत्यारीत येतात..."
              subhadingclass="text-left"
              classname="text-left mb-1"
            />
          </div>
          <div className="flex gap-2 lg:gap-4">
            <div>
              <figure>
                <img src="./img1.webp" className="lg:h-60" alt="" />
              </figure>
            </div>
            <div className="mt-[100px]">
              <figure>
                <img src="./img2.webp" className="lg:h-80" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto mt-16 flex flex-col lg:flex-row gap-6 items-center">
          {/* MAP IMAGE */}
          <figure className="w-full sm:w-[357px] sm:h-[220px] sm:h-[263px] flex-shrink-0">
            <img
              src="./map.webp"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </figure>

          {/* INFO BOX */}
          <div className="bg-[#fff2e7] w-full lg:w-[700px] p-6 sm:p-10 flex md:flex-row flex-col flex-wrap gap-4 sm:gap-8 rounded-2xl">
            <h3 className="text-sm font-bold min-w-[45%]">
              स्थापन वर्ष: <span className="font-normal">30.06.2014</span>
            </h3>

            <h3 className="text-sm font-bold min-w-[45%]">
              गाव: <span className="font-normal">पळसुन</span>
            </h3>

            <h3 className="text-sm font-bold min-w-[45%]">
              तालुक: <span className="font-normal">नवापूर</span>
            </h3>

            <h3 className="text-sm font-bold min-w-[45%]">
              जिल्हा: <span className="font-normal">नंदुरबार, महाराष्ट्र</span>
            </h3>

            <h3 className="text-sm font-bold min-w-[45%]">
              एकूण लोकसंख्या: <span className="font-normal">1547</span>
            </h3>

            <h3 className="text-sm font-bold min-w-[45%]">
              क्षेत्रफळ: <span className="font-normal">३७५.९१ हेक्टर</span>
            </h3>
          </div>
        </div>

        <div className="max-w-[1000px] py-[90px]  m-auto sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="md:col-span-7 col-span-12">
            <SectionHeader title="स्थान आणि दळणवळण" classname="mb-[30px]" />
            <div className="flex justify-start flex-col items-start mb-5">
              <div className="flex gap-2 justify-center items-center mb-1">
                <figure className="mb-0 bg-[#FD7E14] w-9 h-9 flex rounded-[50px] justify-center items-center">
                  <img src="./icon1.svg" alt="" className="h-6 w-6" />
                </figure>
                <h3 className="text-[20px] font-[700]">स्थान माहिती:</h3>
              </div>
              <p className="font-[500] text-[12px]">
                भारतातील बहुतेक खेडी ही ग्रामीण भागात वसलेली असतात आणि त्यांचा
                मुख्य व्यवसाय शेती असतो. (येथे तुमची मोठी डमी टेक्स्ट असू
                शकते...)
              </p>
            </div>
            <div className="flex justify-start flex-col items-start">
              <div className="flex gap-2 justify-center items-center mb-1">
                <figure className="mb-0 bg-[#FD7E14] w-9 h-9 flex rounded-[50px] justify-center items-center">
                  <img src="./icon1.svg" alt="" className="h-6 w-6" />
                </figure>
                <h3 className="text-[20px] font-[700]">दळणवळण माहिती:</h3>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">
                  जवळचे रेल्वे स्टेशन:
                </p>
                <p className="text-[14px] font-[600] text-[#555]">नंदुरबार ३० km </p>
              </div>
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">
                  जवळचे विमानतळ:
                </p>
                <p className="text-[14px] font-[600] text-[#555]">सुरत</p>
              </div>
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">जवळचे शहर:</p>
                <p className="text-[14px] font-[600] text-[#555]">नंदूरबार</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 col-span-12">
            <figure className="h-[100%] w-[100%]">
              <img src="./school.webp" alt="" className="h-[100%] w-[100%]" />
            </figure>
          </div>
        </div>
      </div>
      {/* completed */}
      <div className="py-[60px] bg-[#f8f9fa]">
        <SectionHeader
          title="आमचे प्रशासकीय अधिकारी"
          classname="mb-[60px] underline1"
        />
        <div className="m-auto flex justify-center gap-5">
          {officersList.length > 0 ? (
            officers.map((item) => <MediumCard key={item._id} data={item} />)
          ) : (
            <div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>
          )}
        </div>
      </div>

      <div className="grampanchayatmain bg-white bg-dot px-5 py-[90px]">
        <SectionHeader title="ग्रामपंचायतीचे माननीय सदस्य" classname="mb-[60px]" />
        <div className="m-auto max-w-[1000px] flex flex-wrap gap-[40px] justify-center">
          {bigMembers.length > 0 ? (
            bigMembers.map((item) => <BigCards key={item._id} data={item} />)
          ) : (
            <div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>
          )}
        </div>
        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          {smallMembers.length > 0 ? (
            smallMembers.map((item) => (
              <Smallcards key={item._id} data={item} />
            ))
          ) : (
            <div className="flex justify-center items-center"><p className="text-center">सध्या ही माहिती उपलब्ध नाही.</p></div>
          )}
        </div>
      </div>

      <div className="py-[60px] bg-[#f0f3f5]">
        <div class="overflow-x-auto max-w-[1092px] bg-white  py-4 m-auto  rounded-lg mt-[60px]">
          <table class="w-full border border-gray-200 border-collapse shadow-lg p-6">
            <thead>
              <tr class="bg-[#ff8c1a] text-white text-left">
                <th class="p-4 border border-gray-200 md:w-[180px]">
                  पदाचे नाव
                </th>
                <th class="p-4 border border-gray-200">जबाबदारी</th>
                <th class="p-4 border border-gray-200 md:block hidden">
                  भूमिका
                </th>
              </tr>
            </thead>

            <tbody class="text-[15px] leading-relaxed text-gray-800">
              <tr>
                <td class="p-4 text-[14px] border border-gray-200 bg-[#fff7ec] font-semibold text-center">
                  सरपंच
                </td>
                <td class="p-4 border border-gray-200 text-[12px]">
                  ग्रामपंचायतीच्या सर्व बैठकींचे अध्यक्षस्थान भूषविणे. पंचायतचे
                  ठराव मंजूर करून घेणे आणि त्यांची अंमलबजावणी सुनिश्चित करणे.
                  ग्रामपंचायतीच्या निधीचा योग्य व पारदर्शक वापर करणे. शासनाच्या
                  विविध योजनांची माहिती ग्रामस्थांपर्यंत पोहोचवणे.
                  ग्रामस्वच्छता, आरोग्य, शिक्षण, पाणीपुरवठा, आणि इतर मूलभूत
                  सोयींबाबत निर्णय घेणे. ग्रामसभांमध्ये नागरिकांच्या अडचणी ऐकून
                  त्यावर उपाययोजना करणे. उपसरपंच आणि ग्रामसेवक यांच्याशी समन्वय
                  ठेवून कामकाज चालवणे.
                </td>
                <td class="p-4 border border-gray-200 text-[12px] md:block hidden">
                  ग्रामपंचायतीचा प्रमुख म्हणून सरपंच हा गावाच्या विकासाचा नेता
                  असतो. ग्रामपंचायतीच्या सर्व कामकाजाचे नेतृत्व करणे,
                  ग्रामस्थांमध्ये एकता राखणे आणि शासनाच्या योजना प्रभावीपणे
                  राबवणे ही सरपंचाची मुख्य भूमिका असते.
                </td>
              </tr>

              <tr>
                <td class="p-4 border text-[14px] border-gray-200 bg-[#fff7ec] font-semibold text-center">
                  उपसरपंच
                </td>
                <td class="p-4 border border-gray-200 text-[12px]">
                  सरपंच अनुपस्थित असल्यास बैठका अध्यक्ष म्हणून घेणे.
                  ग्रामपंचायतीच्या ठरावांची व योजनांची अंमलबजावणी करण्यात
                  सहकार्य करणे. विविध समित्यांवर सदस्य म्हणून कार्य करणे व
                  ग्रामस्थांच्या समस्यांकडे लक्ष देणे. सरपंचास विकासकामांसाठी
                  सूचना व सहाय्य करणे. ग्रामपंचायतीतील अधिकारी व सदस्यांमधील
                  समन्वय राखणे. पंचायत निधी व नोंदींच्या देखरेखीत मदत करणे.
                </td>
                <td class="p-4 border border-gray-200 text-[12px] md:block hidden">
                  उपसरपंच हा सरपंचाचा सहाय्यक असतो आणि सरपंच अनुपस्थित असताना
                  त्याची जबाबदारी पार पाडतो. ग्रामपंचायतीच्या सर्व कामकाजात
                  सहकार्य आणि देखरेख करणे ही त्याची प्रमुख भूमिका आहे.
                </td>
              </tr>

              <tr>
                <td class="p-4 text-[14px] border border-gray-200 bg-[#fff7ec] font-semibold text-center">
                  ग्रामपंचायत अधिकारी
                </td>
                <td class="p-4 border border-gray-200 text-[12px]">
                  ग्रामपंचायतीची सर्व प्रशासकीय कामे नियमित ठेवणे. उत्पन्न आणि
                  खर्चाची नोंद ठेवणे व वार्षिक अहवाल तयार करणे. ग्रामपंचायतीच्या
                  बैठकींचे अजेंडे तयार करणे व बैठकींची नोंद ठेवणे. कर व महसूल
                  वसूल करणे. विविध शासकीय योजना जसे मनरेगा, जलजीवन मिशन, स्वच्छ
                  भारत मिशन इत्यादींची अंमलबजावणी करणे. ग्रामस्थांना आवश्यक
                  कागदपत्रे (जन्म, मृत्यू दाखले इ.) पुरवणे. सरपंच व उपसरपंच
                  यांच्या मार्गदर्शनाखाली ग्रामविकासाची कामे करणे. शासनाशी
                  पत्रव्यवहार आणि अहवाल सादर करणे.
                </td>
                <td class="p-4 border border-gray-200 text-[12px] md:block hidden">
                  ग्रामसेवक हा ग्रामपंचायतीचा शासकीय प्रतिनिधी व प्रशासकीय
                  प्रमुख असतो. पंचायतचे दैनंदिन कामकाज, नोंदी, लेखा व शासन
                  योजनांची अंमलबजावणी करणे हे त्याचे मुख्य कार्य असते.
                </td>
              </tr>

              <tr>
                <td class="p-4 text-[14px] border border-gray-200 bg-[#fff7ec] font-semibold text-center">
                  ग्राम रोजगार सहाय्यक
                </td>
                <td class="p-4 border border-gray-200 text-[12px]">
                  ग्रामपंचायतीचे सर्व संगणकीय नोंदी, अहवाल, पत्रव्यवहार आणि
                  दस्तऐवज तयार करणे व संग्रहीत ठेवणे. ग्रामपंचायतीच्या ई-पंचायत
                  प्रणाली, ऑनलाइन कर वसुली, जनगणना व इतर शासन प्रणालींमध्ये डेटा
                  प्रविष्ट करणे. ग्रामपंचायतीच्या संकेतस्थळाचे (Website)
                  अद्ययावत राखणे आणि आवश्यक माहिती अपलोड करणे. ग्रामसेवक व सरपंच
                  यांच्या सूचनेनुसार विविध शासकीय फॉर्म, पत्रे व अहवाल तयार
                  करणे. कार्यालयीन संगणक, प्रिंटर, स्कॅनर, इंटरनेट व नेटवर्कची
                  देखभाल करणे. ग्रामपंचायतीच्या डिजिटल नोंदींची बॅकअप व्यवस्था
                  ठेवणे आणि माहितीची सुरक्षितता सुनिश्चित करणे. नागरिकांना
                  ऑनलाइन सेवा (जसे जन्म/मृत्यू दाखले, मालमत्ता कर पावत्या इ.)
                  पुरविण्यात सहाय्य करणे. ग्रामपंचायतीच्या योजनांशी संबंधित
                  माहिती व आकडेवारी सादर करणे. ई-मेल, एमआयएस (MIS) आणि इतर
                  शासकीय पोर्टलवर आवश्यक डेटा सादर करणे.
                </td>
                <td class="p-4 border border-gray-200 text-[12px] md:block hidden">
                  संगणक परिचालक हा ग्रामपंचायतीच्या कार्यालयीन कामकाजासाठी संगणक
                  प्रणाली, सॉफ्टवेअर आणि डिजिटल साधनांचा वापर करून प्रशासनिक
                  कार्ये सुलभ करण्याचे कार्य करतो. ग्रामपंचायतीचे सर्व डिजिटल
                  नोंदी, अहवाल, ई-गव्हर्नन्स उपक्रम, आणि ऑनलाइन सेवा यांचे
                  व्यवस्थापन करणे ही त्याची मुख्य भूमिका असते.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-[#fcf7f2] py-2 lg:py-10">
        <h2 className="font-bold text-black text-sm lg:text-2xl text-center">
          मुख्य व आपत्कालीन संपर्क
        </h2>
        <p className="text-base lg:text-sm text-center mt-3">
          महत्वाचे विभाग आणि आपत्कालीन संपर्क क्रमांक खालीलप्रमाणे आहेत.
        </p>
        <Box
          title="आपत्कालीन संपर्क माहिती सध्या उपलब्ध नाही."
          classname="w-[500px] p-0 rounded-xl border border-dashed border-orange-400"
        />
      </div>
    </>
  );
};

export default AboutUs;

