import React, { useEffect, useState } from "react";
import SectionHeader from "../../component/SectionHeader";
import { Play, X } from "lucide-react";
import API from "../../api/api";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [popupItem, setPopupItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  // fetch gallery from backend
  useEffect(() => {
    API.get("/gallery")
      .then((res) => { 
        // फक्त active items
        const activeItems = res.data.filter((item) => item.isActive);
        setGalleryItems(activeItems);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
      });
  }, []);

  // filter
  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  return (
    <>
      <div className="bg-white py-[90px]">
        <SectionHeader
          title="गॅलरी"
          subheading="गावातील सुंदर क्षण, कार्यक्रम आणि प्रगतीची झलक."
        />

        <div className="max-w-[1200px] mx-auto px-4 mt-[50px]">
          {/* FILTER BUTTONS */}
          <div className="flex justify-center gap-4 mb-10">
            {["all", "photo", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-2 py-2 border-b-[2px] text-[14px] font-[600] transition ${
                  filter === type
                    ? "border-b-[#FD7E14] text-[#FD7E14]"
                    : "border-b-transparent text-[#595450]"
                }`}
              >
                {type === "all" && "सर्व"}
                {type === "photo" && "फोटो"}
                {type === "video" && "व्हिडिओ"}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 justify-center md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredItems.map((item) => {
              // फोटो item
              if (item.type === "photo") {
                return (
                  <div
                    key={item._id}
                    className="rounded-xl overflow-hidden shadow-[1px_1px_12px_#bfbfbf]"
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
                );
              }

              // व्हिडिओ item (future use)
              return (
                <div
                  key={item._id}
                  className="rounded-xl overflow-hidden shadow-[1px_1px_12px_#bfbfbf]"
                >
                  <div
                    className="relative overflow-hidden rounded-t-xl cursor-pointer group"
                    onClick={() => setPopupItem(item)}
                  >
                    <img
                      src={`${item.file}`} // thumbnail म्हणून imageच वापरतोय
                      alt={item.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play size={40} color="#fff" />
                    </div>
                  </div>

                  <div className="bg-white p-2">
                    <p className="text-[13px]">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {popupItem && (
        <div
          className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-4"
          onClick={() => setPopupItem(null)}
        >
          <div
            className="relative max-w-[900px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute -top-10 right-0 text-white"
              onClick={() => setPopupItem(null)}
            >
              <X size={32} />
            </button>

            {/* PHOTO VIEW */}
            {popupItem.type === "photo" && (
              <img
                src={`${popupItem.file}`}
                alt={popupItem.title}
                className="w-full max-h-[80vh] object-contain rounded-xl bg-black"
              />
            )}

            {/* VIDEO VIEW (जर backend videoUrl देईल तर) */}
            {popupItem.type === "video" && popupItem.videoUrl && (
              <iframe
                src={popupItem.videoUrl}
                className="w-full h-[450px] rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
