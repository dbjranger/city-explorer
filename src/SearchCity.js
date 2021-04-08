import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SearchCity extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }
  
  getInput = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.textInput.current.value);
  }

  render() {
    return (
      <Form onSubmit={this.getInput}>
        <h1>City Explorer</h1>
        <Form.Row>
            <Form.Control placeholder="Enter City Name" ref={this.textInput} />
        </Form.Row>
        <br></br>
        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    )
  }
}

export default SearchCity;