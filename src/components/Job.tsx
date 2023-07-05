import { MdPhonelink, MdOutlineDesktopWindows } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const Job = () => {
  return (
    <div id="bio">
      <h1 className="title">What I do?</h1>
      <div className="title-cards">
        <div className="cardbio">
          <div className="rad">
            <MdPhonelink className="icon" />
          </div>
          <div className="biotext">
            <h3>Web Design</h3>
            <p>
              Master of the visual realm, I am a frontend virtuoso, sculpting
              captivating and intuitive interfaces that leave users spellbound
              and yearning for more.
            </p>
          </div>
        </div>
        <div className="cardbio">
          <div className="rad">
            <MdOutlineDesktopWindows className="icon" />
          </div>
          <div className="biotext">
            <h3>Technical Writing</h3>
            <p>
              As a skilled technical writer, I wield the power of words to
              distill complex concepts into clear, concise, and comprehensive
              documentation that enlightens and empowers users.
            </p>
          </div>
        </div>
        <div className="cardbio">
          <div className="rad">
            <GiTeacher className="icon" />
          </div>
          <div className="biotext">
            <h3>Tutoring</h3>
            <p>
              I guide aspiring frontend developers on their journey, unraveling
              the mysteries of HTML, CSS, and JavaScript, empowering them to
              build captivating websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
