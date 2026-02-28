const Button = ({ text, classname, href }) => {
  return (
    <>{
      !href && (
 <button
        className={` bg-[#FFD7AE]
        text-[#000]
        text-[12px]
        font-[600]
        px-6
        py-2.5
        rounded-md
        transition-all
        duration-300
        hover:bg-[#ffc98f]
        hover:shadow-md
        active:scale-95 ${classname}`}
      >
        {text}
      </button>
      )
    }
    {
      href && (
        <a   className={` bg-[#FFD7AE]
        text-[#000]
        text-[12px]
        font-[600]
        px-6
        py-2.5
        rounded-md
        transition-all
        duration-300
        hover:bg-[#ffc98f]
        hover:shadow-md
        active:scale-95 ${classname}`} href={href}> {text}</a>
      )
    }
     
    </>
  );
};

export default Button;
