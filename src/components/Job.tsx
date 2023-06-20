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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
              commodi saepe vitae repellat iusto quia?
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
              commodi saepe vitae repellat iusto quia?
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
              commodi saepe vitae repellat iusto quia?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
