import React from 'react';
import Likes from './Likes.jsx';

// Exercise 2: Set It Up
// write a functional component
// make it a div with class name FeedItem
// make an img element inside
// import Likes, include it underneath img
// export the component!

// Exercise 3: Prop It Up
// Need to pass in props as params to the component.
// Need to destructure what you need from the props.
// Hint: What do you need in order to get the image to display?
// Hint what do you need in order to get likes to display in the Likes component?


const FeedItem = (props) => {
  const { id, title, url, likes, userLiked } = props.image;
  return(
    <div className="FeedItem">
      <h2>{title}</h2>
      <img src={url}/>
      <Likes userLiked={userLiked} likes={likes} />
    </div>
  );
};

export default FeedItem;
