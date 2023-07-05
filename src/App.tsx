import "./App.css";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Nav from "./Layout/Nav";
import Page from "./Page";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let tl = gsap.timeline();
  let cursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor.current, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  }, [tl]);

  return (
    <>
      <div className="App">
        <div className="animate" ref={cursor}></div>
        <Nav />
        <Page />
      </div>
    </>
  );
}

export default App;
