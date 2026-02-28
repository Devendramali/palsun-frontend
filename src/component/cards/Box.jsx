
const Box = ({title, classname}) => {
  return (
    <>
        <div className="max-w-full mt-6 flex justify-center">
          <div className={`p-5 ${classname}`}>
            <p className="text-[10px] text-center pt-2 text-zinc-500">{title}</p>
          </div>
        </div>
    </>
  )
}

export default Box