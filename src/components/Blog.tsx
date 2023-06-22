import { useState } from "react";

const Blog = () => {
  const [pro, setPro] = useState(true);
  const [project, setProject] = useState(false);
  const [article, setArticle] = useState(false);

  // const showAll = () => {
  //   setPro(true);
  //   setProject(true);
  //   setArticle(true);
  // };

  const showPro = () => {
    setPro(true);
    setProject(false);
    setArticle(false);
  };

  const showProject = () => {
    setPro(false);
    setProject(true);
    setArticle(false);
  };

  const showArticle = () => {
    setPro(false);
    setProject(false);
    setArticle(true);
  };

  return (
    <div id="blog">
      <h1 className="title">PORTFOLIO</h1>
      <div className="proButton">
        {/* <li onClick={showAll} className={all ? "active" : ""}>
          All
        </li> */}
        <li onClick={showPro} className={pro ? "active" : ""}>
          HTML Projects
        </li>
        <li onClick={showProject} className={project ? "active" : ""}>
          React Projects
        </li>
        <li onClick={showArticle} className={article ? "active" : ""}>
          Articles
        </li>
      </div>
      {/* <div style={{ display: all ? "block" : "none" }}>
        <h3>ALL PROJECTS</h3>
      </div> */}
      <div style={{ display: pro ? "block" : "none" }}>
        <h1>HTML PROJECTS</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        voluptatum tempore consectetur?
      </div>
      <div style={{ display: project ? "block" : "none" }}>
        <h1>REACT PROJECTS</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit velit ut
        nobis necessitatibus iste soluta? Tempore, atque. Tempora praesentium
        magnam fugiat, maxime quibusdam culpa, debitis exercitationem tempore
        quaerat ipsa iusto.
      </div>
      <div style={{ display: article ? "block" : "none" }}>
        <h1>ARTICLES</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        et magni quia a unde officia error aliquid iusto placeat ipsa, nam
        obcaecati est aspernatur delectus doloremque recusandae blanditiis. At,
        quam.
      </div>
    </div>
  );
};

export default Blog;
