import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import PlayerModal from "../components/PlayerModal";
import "./homepage.css";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import axios from "axios";

const HomePage = () => {
  const [slider, setSlider] = useState(false);
  const [isMoved, setIsMoved] = useState(0);
  const listRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardArray,setCardArray]=useState([])

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
    if (direction === "right" && slider < cardArray.length-5) {
      setSlider(slider + 1);
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
    }
  };
  const handleNextVideo = () => {
    if (selectedCard < cardArray.length - 1) {
      setSelectedCard(selectedCard + 1);
    } else if (selectedCard === cardArray.length - 1) {
      setSelectedCard(0);
    }
  };

  const handlePrevVideo = () => {
    if (selectedCard > 0) {
      setSelectedCard(selectedCard - 1);
    } else if (selectedCard === 0) {
      setSelectedCard(cardArray.length - 1);
    }
  };
  

  const fetchApi = async () => {
    const channelId = 'UCQKOjx1qhwFf5qKRgH1WXsA';
    const maxResults = 15;
    const apiKey = 'AIzaSyCiOw1d3aQgf-y8K4RKv7rSEXClAl3jVV0';
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video,video.short&maxResults=${maxResults}&key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setCardArray(data.items)
      console.log(data);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };
  useEffect(() => {

    fetchApi()
  
  }, []);
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
              style={{ cursor: "pointer" }}
            >
              <Cards imgSrc={ele.snippet.thumbnails.high.url} text={ele.snippet.title || 'Description'} index={index} />
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
          <div>
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
