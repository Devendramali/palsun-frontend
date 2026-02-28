import React from 'react'

const MainHeading = ({title, classname, subheading, subhadingclass}) => {
  return (
    <>
       <div className="text-center">
        <h1 className={`text-[37px] font-[700] ${classname}`}>{title}</h1>
        <p className={`text-[14px] ${subhadingclass}`}>{subheading}</p>
       
     </div>
    </>
  )
}

export default MainHeading