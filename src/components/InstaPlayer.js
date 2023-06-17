import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const InstaPlayer = ({url}) => {
  return (
    <div>
      <InstagramEmbed
        url="https://www.instagram.com/p/ABC123/"
        clientAccessToken="YOUR_INSTAGRAM_ACCESS_TOKEN"
        maxWidth={500}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
      />
    </div>
  );
};

export default InstaPlayer;
