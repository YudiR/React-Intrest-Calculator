import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const intrest = props => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Priciple</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={event => {
            props.principleChange({
              index: props.index,
              text: event.target.value
            });
          }}
          // placeholder="principle"
          value={props.principle}
          type="number"
        />
        <InputGroup.Prepend>
          <InputGroup.Text>Rate</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={event => {
            props.rateChange({ index: props.index, text: event.target.value });
          }}
          // placeholder="rate"
          value={props.rate}
          type="number"
        />
        <InputGroup.Prepend>
          <InputGroup.Text>Years</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={event => {
            props.yearsChange({ index: props.index, text: event.target.value });
          }}
          // placeholder="years"
          value={props.years}
          type="number"
        />
        <InputGroup.Prepend>
          <InputGroup.Text>Total Amount</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          // placeholder="total amount"
          value={props.amount}
          type="number"
          disabled={true}
          function={props.calc}
        />

      <Button variant="info" onClick={e => props.add()}>
        +
      </Button>

      {props.index !== 0 ? (
        <Button variant="danger" onClick={e => props.delete(props.index)}>
          -
        </Button>
      ) : null}
      </InputGroup>
    </div>
  );
};

export default intrest;
