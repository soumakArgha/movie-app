import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CircularProgress from '@material-ui/core/CircularProgress'
import SelectedMovie from './SelectedMovie'

export default class ImageGrid extends Component {


    componentDidMount = () => {
        setTimeout(()=> {
            document.querySelector('.loader').style.display = "none"
        },3000);
    }

  render() {
        return (
            <div>
                 <div className="loader"><CircularProgress/></div>
                
                <GridList>
                  {
                      this.props.movies.map(movie => {
                          return <GridListTile key={movie.imdbID} onClick={()=>{
                              this.props.selectItem(movie.imdbID);
                              this.props.isSelected();
                          }} style={{height: '300px'}} >
                              <img src={movie.Poster} alt="movie_poster"/>
                              <GridListTileBar title={movie.Title} actionIcon={
                                  <IconButton>
                                      <StarBorderIcon style={{color: '#fff'}}/>
                                  </IconButton>
                              }
                              actionPosition="left"/>
                          </GridListTile>
                      })
                  }
                  </GridList>
 

        <SelectedMovie movieDetails={this.props.selectedMovie} selected={this.props.selected} closeSelected={this.props.closeSelected}/>
            </div>
          )
    
  }
}
