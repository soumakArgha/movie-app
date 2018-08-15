import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios'
//import components
import Navbar from './components/Navbar'
import ImageGrid from './components/ImageGrid'
import SelectedMovie from './components/SelectedMovie'

const API_KEY = '5fbcf33c';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: [],
      currentItem: '',
      selectedMovie: {},
      selected: false
    }
  }

  submit = (query) => {
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    .then(data => {
      let result = data.data.Search;
      if(result === undefined) {
        this.setState({result: []})
      } else {
        result.sort((a, b) => {
          return a.Year<b.Year 
        })
        this.setState({
          query,
          result
        });
      }
    })
    .catch(err => console.log(err))    
  }

  selectItem = (item) => {
    this.setState({currentItem: item});
    axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${item}`)
    .then(data=> this.setState({selectedMovie: data.data}))
    .catch(err => console.log(err));
  }

  isSelected = () => {
    this.setState({selected: true})
  }

  closeSelected = () => {
    this.setState({selected: false});
  }
  render() {
    return (
      <div>
        <Navbar submit={this.submit}/>
        {
          (this.state.result.length === 0) ? 
          <h1 className="error"> Not Found :( </h1> : 
            <Fragment>
              <ImageGrid selectItem={this.selectItem} isSelected={this.isSelected} movies={this.state.result} />
              <SelectedMovie movieDetails={this.state.selectedMovie} selected={this.state.selected} closeSelected={this.closeSelected}/>
            </Fragment>
          
        }
      </div>
    );
  }
}

export default App;
