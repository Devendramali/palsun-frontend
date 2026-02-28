const Card = ({ item, raised = false }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-4 text-center
        transition-all duration-300 hover:shadow-xl
        w-full md:max-w-[240px]   transition-transform duration-500 hover:scale-110
        ${raised ? "lg:-translate-y-10" : ""}`}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full md:h-[220px] object-cover
          "
        />
      </div>

      <h3 className="mt-4 font-bold text-[16px]">
        {item.name}
      </h3>
      <p className="text-[13px] text-gray-600 mt-1 leading-snug">
        {item.post}
      </p>
    </div>
  );
};


export default Card;
