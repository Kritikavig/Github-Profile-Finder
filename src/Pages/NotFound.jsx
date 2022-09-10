import { useContext } from "react";
import { ImHeartBroken } from "react-icons/im";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";

const NotFound = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-[#3D4451]" : "bg-[#181A1B]"} sm:flex sm:justify-center sm:items-center w-full h-full`}>
      <ImHeartBroken className="text-10xl mx-auto sm:mx-0" />
      <div className="not-found-text text-3xl text-center mx-9">
        <h2>Uppps... Worng Path</h2>
        <p className="text-2xl mt-2">User Not Found !</p>
        <Link to="/" className="btn mt-4 text-xl">
          Return to HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
