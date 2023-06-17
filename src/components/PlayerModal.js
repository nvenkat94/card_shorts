
import React, { useState } from "react";
import "./playerModal.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PlayerModal = ({
  cardArray,
  selectedCard,
  handleClose,
  handleNextVideo,
  handlePrevVideo,
}) => {
  const videoId = cardArray[selectedCard].videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1&loop=1&mute=1`;
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="player-modal-overlay" onClick={handleClose}>
      <div className="player-modal-navigation">
          <BsChevronLeft
            className="player-modal-nav-left"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevVideo();
            }}
          />
          </div>
      <div className="player-modal-content">
        <iframe
          title="YouTube Video"
          className="player-modal-iframe"
          src={embedUrl}
          allowFullScreen
        ></iframe>
        <div
          className="descContainer"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <h4>About Product</h4>
          {showDesc && (
            <p style={{ paddingLeft: "8px" }}>
              {cardArray[selectedCard].description || "Description"}
            </p>
          )}
          <div className="showButton" style={{ width: "100%" }}>
            <button
              // className="showButton"
              onClick={(e) => {
                e.stopPropagation();
                setShowDesc(true);
              }}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
        
          <div className="player-modal-navigation">

          <BsChevronRight
            className="player-modal-nav-right"
            onClick={(e) => {
              e.stopPropagation();
              handleNextVideo();
            }}
          />
        </div>
    </div>
  );
};

export default PlayerModal;
