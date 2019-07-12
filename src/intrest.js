import React from "react";

const intrest = props => {
  return (
    <div>
      <input
        onChange={event => {
          props.principleChange({
            index: props.index,
            text: event.target.value
          });
        }}
        placeholder="principle"
        value={props.principle}
        type="number"
      />
      <input
        onChange={event => {
          props.rateChange({ index: props.index, text: event.target.value });
        }}
        placeholder="rate"
        value={props.rate}
        type="number"
      />
      <input
        onChange={event => {
          props.yearsChange({ index: props.index, text: event.target.value });
        }}
        placeholder="years"
        value={props.years}
        type="number"
      />
      <input
        // onChange={event => {
        // props.yearsChange({index:props.index, text:event.target.value})}}
        placeholder="total amount"
        value={props.amount}
        type="number"
        disabled={true}
        function={props.calc}
      />
      <button onClick={e => props.add()}>+</button>
      {props.index !== 0 ? (
        <button onClick={e => props.delete(props.index)}>-</button>
      ) : null}
    </div>
  );    
};

export default intrest;
