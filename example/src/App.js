import React, { Component } from "react";
import ReactDOM from "react-dom";
import {TextBox, DateBox} from "forca-forms-react";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  render = () => {
    return (
      <div>
        <TextBox
          outerClasses="text-box"
          autoComplete="on"
          autoFocus={true}
          disabled={false}
          name="test"
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          errorMessage="Error message"
          placeholder="test"
          readOnly={false}
          size="40"
          step="3" />
        <DateBox 
        />
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;