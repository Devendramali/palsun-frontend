// import { useEffect, useState } from "react";
import SectionHeader from "../component/SectionHeader";
import API from "../api/api";
import { useEffect, useState } from "react";
const Awards = () => {
  const [awards, setAwards] = useState([]);

  const aswardList = awards.filter((item) => item.isActive);

  useEffect(() => {
    API.get("/awards")
      .then((res) => {
        // backend कडून आलेला data
        setAwards(res.data);
      })
      .catch((err) => {
        console.error("Awards fetch error:", err);
      });
  }, []);
  return (
    <>
      <div className="py-8 flex justify-start flex-col h-full bg-white px-10">
        <div className="flex flex-col itemc">
          <p className="text-2xl text-orange-400 font-bold text-center">
            ✨ गावाचे पुरस्कार आणि सन्मान ✨
          </p>
          <p className="text-[11px] text-center pt-2 text-blue-500">
            आमच्या गावाच्या प्रगती आणि उत्कृष्टतेची ओळख
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {aswardList.length > 0 ? (
            aswardList.map((item) => (
              <div
                key={item._id}
                className="max-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden m-4 transform transition duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.file}
                    alt=""
                    className="w-full h-48 object-cover transition duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <div className="max-w-full mt-6 flex justify-center">
              <div className="bg-white w-2xl border border-dashed p-5">
                <p className="text-[10px] text-center pt-2 text-zinc-500">
                  पुरस्कारांमध्ये अद्याप कोणतीही माहिती जोडलेली नाही.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Awards;
