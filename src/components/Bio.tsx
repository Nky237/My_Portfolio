import Jane from "../assets/images/Jay2.png";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
const Bio = () => {
  return (
    <div id="bio">
      <div className="bio">
        <div>
          <div>
            <div className="bioImg">
              <img src={Jane} alt="" />
              <div className="one">
                <a
                  href="https://www.facebook.com/nkemdili.ezike.5"
                  target="_blank"
                >
                  <ImFacebook className="icon" />
                </a>
              </div>
              <div className="two">
                <a
                  href="https://twitter.com/JHENNA_J?t=7pZQE1QzbP-6iN51fyIWew&s=09"
                  target="_blank"
                >
                  <BsTwitter className="icon" />
                </a>
              </div>
              <div className="three">
                <a href="https://www.instagram.com/jhenna1024/" target="_blank">
                  <AiOutlineInstagram className="icon" />
                </a>
              </div>
              <div className="four">
                <a
                  href="https://www.linkedin.com/in/nkemdili-ezike-aba42821a"
                  target="_blank"
                >
                  <ImLinkedin2 className="icon" />
                </a>
              </div>
              <div className="five">
                <a href="https://github.com/Nky237" target="_blank">
                  <BsGithub className="icon" />
                </a>
              </div>
            </div>
            <div className="bioHead">
              <h2>Frontend Developer</h2>
              <h2>Nkemdili Jane</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title">Biography</h1>
          <div className="bioPara">
            <p>
              As an electronic engineering graduate and a frontend developer
              with 2 years of experience, I have a strong foundation in both
              technical and programming skills. I have collaborated with diverse
              teams throughout my career to create scalable websites. My
              expertise lies in HTML, CSS, JavaScript, TypeScript, ReactJS,
              Next.js, and popular CSS frameworks like Bootstrap, Styled
              Components, and Tailwind. In addition to my professional work, I
              have also volunteered as a tutor in bootcamps, demonstrating my
              commitment to giving back to the community and helping others
              learn and grow in the field.
            </p>
            <p>
              I consistently meet project deadlines, ensuring timely and
              successful deliveries. My background combines technical knowledge,
              industry experience, and a passion for front-end development. I am
              constantly eager to expand my skills and contribute to innovative
              projects.
            </p>
          </div>
          <div className="bioInfo">
            <ul>
              <div>
                <h5>NickName:</h5> <p>Jhenna</p>
              </div>
              <div>
                <h5>Location:</h5> <p>Lagos</p>
              </div>
            </ul>
            <ul>
              <div>
                <h5>Phone:</h5> <p>+2348104434732</p>
              </div>
              <div>
                <h5>Email:</h5>
                <p>ezikenkemdilijane@gmail.com</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
