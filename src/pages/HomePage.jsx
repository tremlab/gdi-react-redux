import React from 'react';
import data from '../../data.json';
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from '../components/FeedList.jsx';

// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of HomePage
// import ImageUploaderForm and FeedList
// include then inside of Homepage
// export the Homepage component!

// Exercise 3: Prop It Up
// Need to extract photos from data and then pass it into HomePage

// Exercise 4: Class It Up
// Turn HomePage from a functional to a class component
	 // handle import/inheritance
	 // add a render method

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <ImageUploaderForm />
        <FeedList
          imgArray={data.photos}
        />
      </div>
    );
  }
}

export default HomePage;
