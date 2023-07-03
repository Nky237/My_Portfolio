// Blog.js
import { useState } from "react";
import { myData, myData2, myData3 } from "../data";
import Modal from "./Modal";

const Blog = () => {
  const [pro, setPro] = useState(true);
  const [project, setProject] = useState(false);
  const [article, setArticle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
      <div style={{ display: pro ? "block" : "none" }}>
        <h1>HTML PROJECTS</h1>
        <div className="ProGrid">
          {myData.map((item) => (
            <div key={item.id} onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: project ? "block" : "none" }}>
        <h1>REACT PROJECTS</h1>
        <div className="ProGrid">
          {myData2.map((item) => (
            <div key={item.id} onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: article ? "block" : "none" }}>
        <h1>ARTICLES</h1>
        <div className="ProGrid">
          {myData3.map((item) => (
            <div key={item.id} onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
        <Modal
          closeModal={closeModal}
          selectedItem={selectedItem}
          myData={myData}
        />
      )}
    </div>
  );
};

export default Blog;
