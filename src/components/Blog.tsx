import { useState } from "react";
import { myData } from "../data";
import Modal from "./Modal";

const Blog = () => {
  const [pro, setPro] = useState(true);
  const [project, setProject] = useState(false);
  const [article, setArticle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const showAll = () => {
  //   setPro(true);
  //   setProject(true);
  //   setArticle(true);
  // };
  const handleDivClick = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

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
        <div className="ProGrid">
          {myData.map((item) => (
            <div onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: project ? "block" : "none" }}>
        <h1>REACT PROJECTS</h1>

        <div className="ProGrid">
          {myData.map((item) => (
            <div onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: article ? "block" : "none" }}>
        <h1>ARTICLES</h1>
        <div className="ProGrid">
          {myData.map((item) => (
            <div onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
        <Modal closeModal={closeModal} selectedItem={selectedItem} />
      )}
    </div>
  );
};

export default Blog;
