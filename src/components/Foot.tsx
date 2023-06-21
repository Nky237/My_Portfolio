import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
const Foot = () => {
  return (
    <div id="foot">
      <div className="foot">
        <div className="footIcon">
          <ImFacebook className="footIcon1" />
          <ImLinkedin2 className="footIcon1" />
          <BsTwitter className="footIcon1" />
          <BsGithub className="footIcon1" />
          <AiOutlineInstagram className="footIcon1" />
        </div>
        <div><p>© 2023 copyright <span>Jhenna</span> all right reserved </p></div>
      </div>
    </div>
  );
};

export default Foot;
