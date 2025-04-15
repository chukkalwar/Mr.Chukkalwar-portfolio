import logo from "../assets/Mr.Chukkalwar.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20  flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/akhil-chukkalwar-1b3007161?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWKQUQaf7SUO%2FQhtcO8%2F4SQ%3D%3D"><FaLinkedin/></a>
        <a href="https://github.com/chukkalwar"><FaGithub/></a>
        <a href="https://www.instagram.com/akhil.s.chukkalwar/"><FaInstagram/></a>
        <a href="https://www.youtube.com/channel/UCfph0xMyoQ106Hp8tSLjXTQ"><FaYoutube/></a>
    </div>
  </nav>;
}

export default Navbar