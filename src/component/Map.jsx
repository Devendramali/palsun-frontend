const Map = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative w-full h-[250px] md:h-[350px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Maharashtra,India&z=7&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
