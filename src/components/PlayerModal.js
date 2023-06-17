import React, { useState } from "react";
import "./playerModal.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPlayer from "react-player";
const PlayerModal = ({
  cardArray,
  selectedCard,
  handleClose,
  handleNextVideo,
  handlePrevVideo,
}) => {
  const [showDesc, setShowDesc] = useState(false);

  const getCardClass = (index) => {
    if (index === selectedCard) {
      return "player-modal-content open";
    } else if (index < selectedCard) {
      return "player-modal-content previous";
    } else if (index > selectedCard) {
      return "player-modal-content next";
    } else {
      return "player-modal-content";
    }
  };

  const getCardStyle = (index) => {
    if (index < selectedCard) {
      const offset = selectedCard - index;
      const paddPerct = 20 - 2 * offset;
      const leftPosition = 50 - 10 * offset;
      const zInd = 99 - 1 * offset;
      return {
        left: `${leftPosition}%`,
        paddingTop: `${paddPerct}%`,
        paddingBottom: `${paddPerct}%`,
        zIndex: `{$zInd}`,
      };
    } else if (index > selectedCard) {
      const offset = index - selectedCard;
      const leftPosition = 50 + 10 * offset;
      const zInd = 99 - 1 * offset;
      const paddPerct = 20 - 2 * offset;
      return {
        left: `${leftPosition}%`,
        paddingTop: `${paddPerct}%`,
        paddingBottom: `${paddPerct}%`,
        zIndex: `{$zInd}`,
      };
    }
    return {};
  };

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
      {cardArray.map((card, index) => (
        <div
          key={index}
          className={getCardClass(index)}
          style={getCardStyle(index)}
          onClick={(e) => e.stopPropagation()}
        >

          <iframe
            title="YouTube Video"
            className="player-modal-iframe"
            style={{zIndex:'1'}}
            src={
              selectedCard === index
                ? `https://www.youtube.com/embed/${card.id.videoId}?autoplay=1&fs=1&loop=1`
                : `https://www.youtube.com/embed/${card.id.videoId}?autoplay=0&fs=1&loop=1&mute=1`
            }
            allowFullScreen
          ></iframe>
          <div
            className="descContainer"
            style={{ position: "absolute", bottom: 0, left: 0 }}
          >
            <h4>About Product</h4>
            {showDesc && (
              <p style={{ paddingLeft: "8px" }}>
                {card.description || "Description"}
              </p>
            )}
            <div className="showButton" style={{ width: "100%" }}>
              <button
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
      ))}
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
