import { useEffect, useState } from 'react'
import logo from '../../assets/img/images.png'
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  let navigate = useNavigate();

  const [takeShot, setTakeShot] = useState(false)

  useEffect(() => {
    const url = takeShot ? "form" : ""
    navigate(`/${url}`);

  }, [takeShot])


  return (
    <header className="flex justify-between items-center py-4 md:py-8">
      {/* <!-- logo - start --> */}
      <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2" aria-label="logo">
        <img src={logo} alt="" className="lg:w-16 w-12 h-auto text-indigo-500" />
        Morocco Vaccination
      </a>
      {/* button */}
      <button onClick={() => { setTakeShot(!takeShot) }} className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
        {!takeShot ? "Take your vaccine" : "Back to Home"}</button>
    </header>
  )
}

export { Header }