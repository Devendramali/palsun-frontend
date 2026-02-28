
const SectionHeader = ({title, classname, subhadingclass, subheading}) => {


  return (
    <>
     <div className="text-center">
        <h2 className={`text-[32px] font-[700] ${classname}`}>{title}</h2>
        {
          subheading &&
          (<p className={`text-[14px] ${subhadingclass}`}>{subheading}</p>)
        }
       
     </div>
    </>
  )
}

export default SectionHeader