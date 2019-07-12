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

  calc = obj => {
    if (isNaN(obj.principal || obj.rate || obj.years)) {
      return obj;
    } else {
      console.log("obj::::", obj);

      obj.amount = obj.principle * (1 + (obj.rate / 100) * obj.years);
      console.log("object amount...", obj);

      return obj;
    }
  };

  
  add = () => {
    console.log("hey!!!!!!!!!!")
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    let newObj = {
      principle: "",
      rate: "",
      years: "",
      amount: ""
    };
    dataCopy.push(newObj);
    this.setState({
      data: dataCopy
    });
  };

 
  
  delete = (index) =>{
    console.log("delete",index)
    let dataCopy = JSON.parse(JSON.stringify(this.state.data))
    dataCopy.splice(index,1) 
    
    
    this.setState(
      {
        data: dataCopy
      }
    )
  }

  principleChange = pData => {
    console.log(pData);
    // let tempArray = {...this.state.data[pData.index]}
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[pData.index].principle = pData.text;
    
    dataCopy[pData.index] = this.calc(dataCopy[pData.index]);
    
    this.setState(
      {
        data: dataCopy
      }
    );
    console.log("temp:::", dataCopy);
  };

  rateChange = data => {
    console.log(data);
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[data.index].rate = data.text;

    dataCopy[data.index] = this.calc(dataCopy[data.index]);

    this.setState(
      {
        data: dataCopy
      }
    );
  };

  yearsChange = data => {
    let dataCopy = JSON.parse(JSON.stringify(this.state.data));
    dataCopy[data.index].years = data.text;

    dataCopy[data.index] = this.calc(dataCopy[data.index]);

    this.setState({
      data: dataCopy
    });
  };

  render() {
    let total = 0;

      this.state.data.forEach(e=>{
        console.log("E::",isNaN(e.amount));
        
        if(!isNaN(parseFloat(e.amount))){
         total += parseFloat(e.amount)
      }
      })
    
    return (
      <div>
        {this.state.data.map((obj, index) => (
          <Intrest
            key={index}
            {...obj}
            // rate={object[0].rate}
            index={index}
            principleChange={this.principleChange}
            rateChange={this.rateChange}
            yearsChange={this.yearsChange}
            calc={this.calc}
            add={this.add}
            delete={this.delete}
          />
         
        ))}
        <h1>TOTAL:{total}</h1>
      </div>
    );
  }
}

export default App;
