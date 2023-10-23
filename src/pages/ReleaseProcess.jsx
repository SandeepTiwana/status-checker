import TypeDetailBox from "../components/TypeDetailBox"

const ReleaseProcess = () => {
  return (
    <div className="m-5">
        <div className='flex justify-center items-center mt-4 gap-4'><h2  className='rounded-md bg-blue-400 p-4 text-white  w-60 h-10 flex  justify-center items-center'>Select Environment Type</h2> <h3 className="p-2 border-2 border-black">DEV 🔽 </h3></div>
<div className="flex justify-between mx-20">
        <TypeDetailBox/>
        <TypeDetailBox/>
        <TypeDetailBox/>
        <TypeDetailBox/>
       
</div>
    
    </div>
  )
}

export default ReleaseProcess