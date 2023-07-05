import Resume from "../assets/images/resume.pdf";
import Jay from "../assets/images/Jane.png";
const Home = () => {
  return (
    <div id="home">
      <div className="homeLink">
        <div className="HomeLink">
          <a href="tel:+2348104434732" target="_blank">
            +2348104434732
          </a>
          <a href="mailto:ezikenkemdilijane@gmail.com" target="_blank">
            ezikenkemdilijane@gmail.com
          </a>
        </div>
        <div>
          <button className="oran">EN</button>
          <button>FN</button>
        </div>
      </div>
      <div className="home">
        <div className="homeFirst">
          <div>
            <h2>Hello, My name is</h2>
            <h1>Nkemdili Jane</h1>
            <div className="roll">
              <h3>Frontend Developer</h3>
              <h3>Electronic Engineer </h3>
              <h3>Technical writer</h3>
            </div>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and articles.
            </p>
            <a href={Resume} download className="download-button">
              Download Resume
            </a>
          </div>
        </div>
        <div className="homeSecond">
          <div className="img">
            <img src={Jay} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
