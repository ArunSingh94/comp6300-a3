import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {FormBox} from './components/form-box/form-box.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      recipes:[],
      searchTerm: '',
      maxReadyTime: null
    };
  }

  componentDidMount(){
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    //alert("You are submitting " + this.state.searchTerm + " and " + this.state.maxReadyTime);

    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=fa7102b52b444015b3a0ed9d7acf2cb2&query=' 
    + this.state.searchTerm + '&maxReadyTime=' + this.state.maxReadyTime + '&number=40&addRecipeInformation=true')
    .then(response => response.json())
    .then(recipes => {
      this.setState({recipes: recipes.results})
      //console.log(this.state.recipes)
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Recipe Finder</h1>
        <FormBox
          mySubmitHandler={this.mySubmitHandler}
          myChangeHandler={this.myChangeHandler} 
        />
        <CardList 
          recipes={this.state.recipes} 
        />
      </div>
    );
  }
}

export default App;
