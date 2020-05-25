import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Git it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link pv2 dib white bg-green"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

/*
  size of 4(f4), 'padding' if 2(pa2), width going to be 70%,
  going to be 'centered' because width 70%.

  w-30 : width 30%
  grow : grow when you hover over it
  f4 : size of 4
  link : it's a link
  ...기타등등
*/
