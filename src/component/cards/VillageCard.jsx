import { useEffect, useState } from "react";
import API from "../../api/api";

const VillageCard = () => {
  const [events, setEvents] = useState([]);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    API.get("/events")
      .then((res) => {
        const activeEvents = res.data.filter((e) => e.isActive);
        setEvents(activeEvents);
      })
      .catch((err) => {
        console.error("Event fetch error:", err);
      });
  }, []);

  // date format (dd-mm-yyyy)
  const formatDate = (dateString) => {
    const d = new Date(dateString);
    return d.toLocaleDateString("mr-IN"); // मराठी format
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length > 0 ? (
          events.slice(0, 3).map((item) => (   // 👈 फक्त 3 cards
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-1">{formatDate(item.date)}</p>
                <p className="text-sm mt-2 line-clamp-2">{item.subtitle}</p>

                <div>
                  <button
                  className="mt-4 text-sm font-medium text-yellow-300 hover:underline"
                >
                  पुढे वाचा →
                </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center col-span-3">
            <p>सध्या ही माहिती उपलब्ध नाही.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VillageCard;