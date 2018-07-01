import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of Likes
// write a span and a button element inside
// export the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: Class It Up
// Turn Likes from a functional to a class component.
	 // handle import/inheritance
	 // add a render method
	 // change props from function argument to object attribute

// Exercise 5: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

class Likes extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      liked: this.props.userLiked,
      numLikes: this.props.likes
    }
  }

  handleLike = (e) => {
    this.setState( {liked: !this.state.liked} )

    let newLikesNum = this.state.numLikes

    if (this.state.liked) {
      newLikesNum += 1
    } else {
      newLikesNum -= 1
    }

    this.setState({numLikes: newLikesNum})
  }

  render() {
    return (
      <div className="Likes">
        <span>
          Likes: {this.state.numLikes}
        </span>
        <button name="likesButton" onClick={this.handleLike}>
          {
            !this.state.liked ?
            "Like :)" :
            "Unlike :(s"
          }
        </button>
        <p>{ this.state.liked }</p>
      </div>
    );

  }
}

export default Likes;
