import { useEffect, useState } from "react";
import SectionHeader from "../../component/SectionHeader";
import API from "../../api/api";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const VillageProgram = () => {
  const ITEMS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]);

  // events fetch
  useEffect(() => {
    API.get("/events")
      .then((res) => {
        // फक्त active events
        const activeEvents = res.data.filter((e) => e.isActive);
        setEvents(activeEvents);
      })
      .catch((err) => {
        console.error("Event fetch error:", err);
      });
  }, []);

  // pagination calculation
  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = events.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // date format (dd-mm-yyyy)
  const formatDate = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("mr-IN"); // मराठी format
  };

  return (
    <>
      <div className="mt-10">
        <SectionHeader title="गावातील कार्यक्रम" />
        <p className="text-[12px] text-center mt-2">
          ग्रामपंचायतीद्वारे आयोजित सामुदायिक बैठकांचे, उत्सव आणि उपक्रमांबद्दल
          अपडेट राहा.
        </p>
      </div>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <span className="text-orange-500 text-[12px] font-medium">
                    {formatDate(item.date)}
                  </span>

                  <h3 className="font-bold text-gray-800 mt-1 text-[14px]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] text-gray-600 mt-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* जर data नसेल */}
          {events.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              सध्या कोणतेही कार्यक्रम उपलब्ध नाहीत.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className={`px-4 text-sm py-2 border rounded-md ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-50"
                }`}
              >
                मागे
              </button>

              <span className="text-sm text-gray-700">
                पान {currentPage} पैकी {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className={`px-4 text-sm py-2 border rounded-md ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-50"
                }`}
              >
                पुढील
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default VillageProgram;
