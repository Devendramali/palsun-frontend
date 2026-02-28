import { Link } from "react-router-dom";

const Herobanner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div
          className="relative rounded-2xl overflow-hidden h-[300px] md:h-[320px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('./member/slider1.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl px-6 md:px-10">
            <p className="text-white text-center text-lg md:text-xl font-semibold leading-relaxed">
              "आपला पाढिंबा, आमचा विकास – चला एकत्र येऊन आपल्या गावाला उज्वल
              भविष्य देऊ!" <br />
              कृपया शंका, सूचना किंवा सहकार्यांसाठी आमच्याशी संपर्क साधा. आम्ही
              आपल्या सेवेत तत्पर आहोत.
            </p>

            <div className="w-full flex justify-center">
              <button className="mt-6 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
                <Link to="/contact">📞 संपर्क करा </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herobanner;
