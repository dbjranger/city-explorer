import React from "react";

class City extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleShowSearch}>Search again</button>
        <h2>{this.props.cityData.display_name}</h2>
        <img
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITYEXPLORER}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`}
          alt="city map"
        />
      </div>
    );
  }
}

export default City;