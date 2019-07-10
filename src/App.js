import React from "react";
import "./App.css";
import Intrest from "./intrest.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          principle: "",
          rate: "",
          years: "",
          amount: ""
        }
      ]
    };
  }

  calc = obj => {};

  principleChange = pData => {
    console.log(pData);
    // let tempArray = {...this.state.data[pData.index]}
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[pData.index].principle = pData.text;

    // tempArray.principle = pData.text
    // tempArray = this.calc(tempArray)

    this.setState(
      {
        data: dataCopy
        // data: {...tempArray}
        // data: update(this.state.items, {1: {name: {$set: 'updated field name'}}})
      },
      () => console.log("state::::",this.state.data[0])
    );
    console.log("temp:::", dataCopy);
  };

  render() {
    return (
      <div>
        {this.state.data.map((obj, index) => (
          <Intrest
            {...obj}
            index={index}
            principleChange={this.principleChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
