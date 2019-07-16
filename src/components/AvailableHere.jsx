import React from 'react';
import './App.css';
import MainMapPage from './main_map_page';

class AvailableHere extends React.Component {

  render() {
    console.log(this.props);
    
    debugger;
    return(
      <div>
        <div className="headings">
          <div>
            <span>You can surf multiple places in <b>€{this.props.location.state.amount}</b> amount.</span>
          </div>
          <div>
            <span>
              Please see below map and select location in you are suitable to enjoy.
            </span>
          </div>
        </div>
        <div className="map">
          <MainMapPage />
        </div>
      </div>
    );
  }
}


export default AvailableHere;
