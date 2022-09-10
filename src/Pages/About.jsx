import React,{useContext} from 'react'
import ThemeContext from "../Context/ThemeContext";
import { Link } from "react-router-dom";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-[#3D4451]" : "bg-[#181A1B]"} w-full h-full text-center text-xl `}>
     <h1 className='m-auto font-bold text-3xl text-center'><br/><br/><br/>About this app</h1>
      <h2 className='mb-4'> GitHub Finder is a react-based app that allows users to search for user profiles and browse their repositories.</h2>
        <Link to="/" className="btn mt-4 text-xl my-3">
          Return to HomePage
        </Link>
    </div>
  )
}

export default About
