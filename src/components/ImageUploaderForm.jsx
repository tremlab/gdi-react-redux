import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a form element with class name ImageUploaderForm
// write one input element and button element inside.
// export the component!


const ImageUploaderForm = () => {
  return (
    <form className="ImageUploaderForm">
      URL: <input type="text" name="imgUrl"></input>
      <button name="imgSubmit">Clicky!</button>
    </form>
  );
};

export default ImageUploaderForm;
