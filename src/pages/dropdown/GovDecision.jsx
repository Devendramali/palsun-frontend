import Box from "../../component/cards/Box"
import SectionHeader from "../../component/SectionHeader"

const GovDecision = () => {
  return (
    <>
      <div className="bg-[#f6f7fa] h-[67vh] flex flex-col justify-center items-center">
        <h2><SectionHeader title="शासन निर्णय" classname="text-zinc-500 py-5"/></h2>
        <Box classname='bg-white w-sm border border-2 border-zinc-500 border-dashed' title="शासन निर्णय' मध्ये अद्याप कोणतीही माहिती जोडलेली नाही."/>
      </div>
    </>
  )
}

export default GovDecision