import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Home from "./Home";
import NotesView from "./NotesView";
import { Route, Switch } from "react-router-dom";
import noteflowers from "../assets/noteflowers.jpg";
import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
body{
  height: 100%;
  background-color: red;
}`;

var Spinner = require("react-spinkit");

function App() {
  const [isLoading, setIsLoading] = useState(false);

  function loadSpinner() {
    setIsLoading(true);
  }

  return (
    // {isLoading &&
    //   <Spinner name="line-scale" color="#702122" style={{flex: 1, marginTop: 240, marginLeft: 650}}/>
    //   }
    <div className="image" onLoad={loadSpinner}>
      <globalStyle />
      <Spinner
        name="ball-grid-pulse"
        color="#702122"
        style={{ position: "fixed", top: "50%", left: "50%" }}
      />
      <Spinner
        name="ball-scale-multiple"
        color="#702122"
        style={{ position: "fixed", top: "50%", left: "50%" }}
      />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/CreateArea" component={CreateArea} />
        <Route path="/NotesView" component={NotesView} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
