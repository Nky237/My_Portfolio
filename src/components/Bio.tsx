import Jane from "../assets/images/Jay2.png";
const Bio = () => {
  return (
    <div id="bio">
      <div className="bio">
        <div>
          <div>
            <div className="bioImg">
              <img src={Jane} alt="" />
            </div>
            <h2>Frontend Developer</h2>
            <h2>Nkemdili Jane</h2>
          </div>
        </div>
        <div>
          <h1 className="title">Biography</h1>
          <p>
            As an electronic engineering graduate and a frontend developer with
            2 years of experience, I have a strong foundation in both technical
            and programming skills. I have collaborated with diverse teams
            throughout my career to create scalable websites. My expertise lies
            in HTML, CSS, JavaScript, TypeScript, ReactJS, Next.js, and popular
            CSS frameworks like Bootstrap, Styled Components, and Tailwind. In
            addition to my professional work, I have also volunteered as a tutor
            in bootcamps, demonstrating my commitment to giving back to the
            community and helping others learn and grow in the field. 
          </p>
          <p>
            I consistently meet project deadlines, ensuring timely and
            successful deliveries. My background combines technical knowledge,
            industry experience, and a passion for front-end development. I am
            constantly eager to expand my skills and contribute to innovative
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
