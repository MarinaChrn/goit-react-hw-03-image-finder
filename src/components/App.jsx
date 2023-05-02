import { Component } from "react";
import { Searchbar } from "./searchbar/Searchbar";

export class App extends Component{
  state={
    value: ''
  }

  handleSubmit = value =>{
    this.setState({value: value})
    console.log(value)
  }

  

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
      </div>
    );
  }
};
