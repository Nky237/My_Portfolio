import Resume from "../assets/images/resume.pdf";
const Home = () => {
  return (
    <div id="home">
      <div className="homeFirst">
        <div className="HomeLink">
          <a href="tel:+2348104434732" target="_blank">
            +2348104434732
          </a>
          <a href="mailto:ezikenkemdilijane@gmail.com" target="_blank">
            ezikenkemdilijane@gmail.com
          </a>
        </div>
        <div>
          <h2>Hello, My name is</h2>
          <h1>Nkemdili Jane</h1>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <a href={Resume} download className="download-button">
            Download Resume
          </a>
        </div>
      </div>
      <div className="homeSecond"></div>
    </div>
  );
};

export default Home;
