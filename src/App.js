import React from "react";
import axios from 'axios';
import SearchCity from './SearchCity'
import Container from "react-bootstrap/Container";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      citySearchedFor: '',
      lat: '',
      lon: ''
    };
  }

  handleShowSearch = () => {
    this.setState({haveWeSearchedYet: false})
  }

  handleSearch = async(citySearchedFor) => {
    let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITYEXPLORER}&q=${citySearchedFor}&format=json`);
    // console.log(locationResponseData.data[0].display_name);

    this.setState({
      citySearchedFor: locationResponseData.data[0].display_name,
      lat: locationResponseData.data[0].lat, 
      lon: locationResponseData.data[0].lon, 
    });
  }

  render() {
    return (
      <>
      <SearchCity handleSearch={this.handleSearch}/>
      <h1>{this.state.citySearchedFor}</h1>
      <h1>{this.state.lat}</h1>
      <h1>{this.state.lon}</h1>
      <Container>
         <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITYEXPLORER}&center=${this.state.lat},${this.state.lon}&zoom=10`} alt="map of city" />
      </Container>
      </>
    );
  }
}

export default App;
