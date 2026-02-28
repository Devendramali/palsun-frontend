const Simplebox = ({ title, subtitle, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#E65100] text-white text-center m-5 text-[9px] font-bold px-5 py-2 rounded-2xl w-35">
        {title}
      </div>
      <div>
        <h2 className="text-25 text-center mb-1 font-bold">{subtitle}</h2>
        <p className="text-zinc-500 text-center text-[11px]">{text}</p>
      </div>
    </div>
  );
};

export default Simplebox;
