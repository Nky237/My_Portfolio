import { IoPersonOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdPhoneCallback, MdOutlineWorkspacePremium } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

const Nav: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  return (
    <div className="nav">
      <div className="orange">
        <h1>N</h1>
      </div>
      <nav>
        <a
          href="#home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => setActiveLink("home")}
        >
          <FaHome className="icons" />
        </a>

        <div>
          <a
            href="#bio"
            className={activeLink === "bio" ? "active" : ""}
            onClick={() => setActiveLink("bio")}
          >
            <IoPersonOutline className="icons" />
          </a>
        </div>
        <div>
          <a
            href="#exp"
            className={activeLink === "exp" ? "active" : ""}
            onClick={() => setActiveLink("exp")}
          >
            <IoDocumentTextOutline className="icons" />
          </a>
        </div>
        <div>
          <a
            href="#port"
            className={activeLink === "port" ? "active" : ""}
            onClick={() => setActiveLink("port")}
          >
            <MdOutlineWorkspacePremium className="icons" />
          </a>
        </div>
        <div>
          <a
            href="#blog"
            className={activeLink === "blog" ? "active" : ""}
            onClick={() => setActiveLink("blog")}
          >
            <FaBlog className="icons" />
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => setActiveLink("contact")}
          >
            <MdPhoneCallback className="icons" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
