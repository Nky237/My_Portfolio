import { MyTes } from "../data";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "../assets";

const Tes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup the event listener on component unmount
    };
  }, []);

  const previousSlide = () => {
    setCurrentSlide((prev: number) => {
      if (prev === 0) {
        return MyTes.length - itemsPerSlide;
      } else {
        return prev - itemsPerSlide;
      }
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev: number) => {
      if (prev >= MyTes.length - itemsPerSlide) {
        return 0;
      } else {
        return prev + itemsPerSlide;
      }
    });
  };

  return (
    <div id="bio">
      <h1 className="title">Testimonial</h1>
      <div className="caro">
        <div className="carousel">
          {MyTes.slice(currentSlide, currentSlide + itemsPerSlide).map(
            (item) => (
              <div key={item.id} className="carouselItem">
                <img src={item.image} alt="" />
                <p>{item.para}</p>
              </div>
            )
          )}
        </div>
        <div className="Tesbtn">
          <img src={ArrowLeft} alt="" onClick={previousSlide} />
          <img src={ArrowRight} onClick={nextSlide} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tes;
