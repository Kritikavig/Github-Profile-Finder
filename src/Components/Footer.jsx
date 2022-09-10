import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${theme === "dark" ? "bg-slate-800" : "bg-[#21262d]"} p-3 flex justify-center items-center fixed inset-x-0 bottom-0`}>
      <BsGithub className="mx-2" />
      <p>GitHub Profile Finder | Made with ❤ by Kritika</p>
    </footer>
  );
};

export default Footer;
