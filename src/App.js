import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios'
//import components
import Navbar from './components/Navbar'
import ImageGrid from './components/ImageGrid'

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import logo from './cinema.png'
const API_KEY = '5fbcf33c';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: [],
      currentItem: '',
      selectedMovie: {},
      selected: false,
      open: false
    }
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
    this.setState({selected: false, selectedMovie: {}});
    

  }
  openAlert = () => {
    this.setState({open: true})
  }

closeAlert = () => {
  this.setState({open: false})
}


submit = (query) => {
  axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
  .then(data => {
    let result = data.data.Search;
    if(result === undefined) {
      this.setState({result: []});
      this.openAlert();
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



  render() {
    return (
      <div>
        <Navbar submit={this.submit}/>
        {
          (this.state.result.length === 0) ? 
          <div>
            <img src={logo} alt="logo" style={{height: '150px', width: '150px', display: 'block', margin: '100px auto 0'}}/> 
            <h1 className="error">Search for movies</h1>
            </div>
            : 
            
            <Fragment>
              <ImageGrid selectedMovie={this.state.selectedMovie} selected={this.state.selected} closeSelected={this.closeSelected} selectItem={this.selectItem} isSelected={this.isSelected} movies={this.state.result} />
            </Fragment>
        }
        <Snackbar
        style={{fontSize: '20px'}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          message={<span id="message-id">Not Found!</span>}
          action={
            <IconButton
              onClick={this.closeAlert}
            >
              <CloseIcon style={{color: '#fff'}}/>
            </IconButton>
          }
        />
      </div>
    );
  }
}

export default App;
