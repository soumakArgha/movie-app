import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
export default class ImageGrid extends Component {

  render() {
    return (
      <div>
        <GridList>
        {
            this.props.movies.map(movie => {
                return <GridListTile key={movie.imdbID} onClick={()=>{
                    this.props.selectItem(movie.imdbID);
                    this.props.isSelected();
                }} style={{height: '300px'}} >
                    <img src={movie.Poster} alt="movie_poster"/>
                    <GridListTileBar title={movie.Title} style={{
                        background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                    }}/>
                </GridListTile>
            })
        }
        </GridList>
      </div>
    )
  }
}
