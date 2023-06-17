import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import PlayerModal from "../components/PlayerModal";
import "./homepage.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const HomePage = () => {
  const [slider, setSlider] = useState(false);
  const [isMoved, setIsMoved] = useState(0);
  const listRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (slider != 0) {
      setIsMoved(true);
    }
    setIsMoved(true);
    if (direction === "left" && slider > 0) {
      setSlider(slider - 1);
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
    }
    if (direction === "right" && slider < 6) {
      setSlider(slider + 1);
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
    }
  };
  const handleNextVideo = () => {
    if (selectedCard < cardArray.length - 1) {
      setSelectedCard(selectedCard + 1);
    }
  };

  const handlePrevVideo = () => {
    if (selectedCard > 0) {
      setSelectedCard(selectedCard - 1);
    }
  };
  const cardArray = [
    {
      text: "Some text",
      image: img1,
      videoId: "5xgM1RAq9YY",
      description: "Description1",
    },
    {
      text: "Some text2",
      image: img2,
      videoId: "L0DWAVbdEaM",
      description: "Description2",
    },
    {
      text: "Some text3",
      image: img3,
      videoId: "AK4dgx60BRs",
      description: "Description3",
    },
    {
      text: "Some tex4",
      image: img4,
      videoId: "5xgM1RAq9YY",
      description: "Description4",
    },
    {
      text: "Some text5",
      image: img5,
      videoId: "L0DWAVbdEaM",
      description: "Description5",
    },
    {
      text: "Some text7",
      image: img6,
      videoId: "AK4dgx60BRs",
      description: "Description6",
    },
    {
      text: "Some text8",
      image: img6,
      videoId: "5xgM1RAq9YY",
      description: "Description7",
    },
    {
      text: "Some text9",
      image: img6,
      videoId: "L0DWAVbdEaM",
      description: "Description8",
    },
    {
      text: "Some text10",
      image: img6,
      videoId: "AK4dgx60BRs",
      description: "Description9",
    },
    {
      text: "Some text11",
      image: img6,
      videoId: "5xgM1RAq9YY",
      description: "Description1",
    },
    {
      text: "Some text12",
      image: img6,
      videoId: "5xgM1RAq9YY",
      description: "Description1",
    },
  ];
  return (
    <div className="home">
      <Navbar />
      <div style={{ position: "relative" }}>
        <BsChevronLeft
          style={{
            cursor: "pointer",
            display: !isMoved && "none",
          }}
          className="slider left"
          onClick={() => {
            handleClick("left");
          }}
        />
        {console.log(openModal)}
        <div className="homeContainer" ref={listRef}>
          {cardArray.map((ele, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCard(index);
                setOpenModal(!openModal);
              }}
            >
              <Cards imgSrc={ele.image} text={ele.text} index={index} />
            </div>
          ))}
        </div>
        <BsChevronRight
          style={{
            cursor: "pointer",
            // display: !isMoved && 'none'
          }}
          className="slider right"
          onClick={() => {
            handleClick("right");
          }}
        />
        {openModal && (
          <div >
            <PlayerModal
            cardArray={cardArray}
            selectedCard={selectedCard}
            handleClose={() => setOpenModal(false)}
            handleNextVideo={handleNextVideo}
            handlePrevVideo={handlePrevVideo}
          />
            
            </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
