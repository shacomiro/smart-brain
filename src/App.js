import React from "react";
import Particles from "react-particles-js";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import Rank from "./component/Rank/Rank";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* 
      <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
