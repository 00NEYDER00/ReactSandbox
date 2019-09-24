import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Button from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import './App.css';

function WelcomeBanner (props) {
  return (
    <header> 
        <h1>Home of {props.CompanyName}</h1>
        <h2>I love {props.CompanyName}</h2>
        <p>I eat {props.food}</p>
    </header> 
  );
};

class WelcomeBannerClass extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <header> 
        <h1>Home of {this.props.CompanyName}</h1>
        <h2>I love {this.props.CompanyName}</h2>
        <p>I eat {this.props.food}</p>
      </header> 
    );
  }
}

class FeatureDonut extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return(
      <h2>Today's feature donut is { this.props.donutName }</h2>
    )
  }
}

function Header(props){
  
  if (props.message){
    return(
      <header>
          <h1>{props.title}</h1>
          <p>{props.message}</p>
      </header>
    )
  }

  return(
    <header>
      <h1>{props.title}</h1>
    </header>
    )
}

function Header1(props){
  return(
    <header>
      <h1>{props.title}</h1>
      { props.message && <p>{props.message}</p> }
    </header>
  )
}

function Header2(props){
  return(
    <header>
      <h1>{props.title}</h1>
      <p>{props.message ? props.message : "Welcome to my app"}</p>
    </header>
  )
}

class MyForm extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ""
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.inputValue !== prevState.inputValue) {
      console.log('The State Change');
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        </label>
      </form>
    )
  }
}

class App extends Component {
  constructor(){
    super()
    // this.state = {
    //   featureDonuts: ['PB&J', 'Apple Cinnamon', 'Double Chocolate', 'Rose Pistachio', 'Maple Bacon', 'Sprinkle']
    // }
  }

  async fetchData() {
    try {
      const apiData = await axios.get('https://api.spacexdata.com/v3/launches/latest', {

      })
      console.log(apiData);
    }catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.fetchData();
  }
  
  
  render() {
    return (
      <div className="App">
        {/* <WelcomeBanner CompanyName="Marvel" food="Potato"/> */}
        {/* <WelcomeBannerClass CompanyName="Marvel" food="Potato" /> */}
        {/* {
          this.state.featureDonuts.map((donut) => {
            return <FeatureDonut donutName={donut} />
          })
        } */}
        {/* <MyForm /> */}
      </div>
    )
  }
}

export default App;
