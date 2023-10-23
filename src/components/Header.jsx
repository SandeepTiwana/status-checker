import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-slate-200 items-center ">
        <ul className="flex text-lg ">
            <Link to='/' className="border-2 w-1/3 border-black">
            <li className=" flex justify-center p-3">Environment Status</li>
            </Link>
            <Link to='/release-process' className="border-2 w-1/3 border-black">
            
            <li className=" flex justify-center p-3">Release Process</li>
            </Link>
            <Link to='/misc' className="border-2 w-1/3 border-black">
            
            <li className=" flex justify-center p-3">Misc</li>
            </Link>
        </ul>
    </div>
  )
}

export default Header