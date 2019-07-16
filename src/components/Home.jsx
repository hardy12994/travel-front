import React from 'react';
import './App.css';

class Home extends React.Component {
  state = {
    amount : ''
  };

  nextPage = () => {
    debugger;
    if(!this.state.amount) return;
    const { history } = this.props;
    history.push('/available-here', { amount: this.state.amount });
  };

  handleChange = (value) => {
    debugger;
    this.setState({
      amount: value
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className ="row budget-row">
          <div className ="col-md-4 text-right">
            <h4> BUDGET </h4>
          </div>
          <div className ="col-md-4">
            <input type="text" className="budget-inp" onChange={ e => this.handleChange(e.target.value)}/>
          </div>
        </div>
        <div className="row sec-row">
          <button className="budget-btn" onClick={this.nextPage}>Show Results</button>
        </div>
      </div>
    ); 
  }
}


export default Home;
