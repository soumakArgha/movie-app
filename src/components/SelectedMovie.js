import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Chip from '@material-ui/core/Chip'
function Transition(props) {
    return <Slide direction="up" {...props}/>
}

export default class SelectedMovie extends Component {
  render() {
    return (
      <div>
          <Dialog fullScreen
          open={this.props.selected}
          TransitionComponent={Transition}>
            <Appbar position="fixed" style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
                <Toolbar>
                    <IconButton style={{color:'#fff'}} onClick={() => this.props.closeSelected()}>
                            <Close/>
                    </IconButton>
                </Toolbar>
            </Appbar>
            <div className="movie_poster" style={{backgroundImage: `url(${this.props.movieDetails.Poster})`}}></div>
            <div className="movie_details">
                <h1>{this.props.movieDetails.Title}</h1>
                {
                    (this.props.movieDetails.Genre !== undefined) 
                    && 
                    this.props.movieDetails.Genre.split(',').map(ele=>{
                        return <Chip style={{marginRight: '10px'}} label={ele} key={ele}/>
                    })
                }
                <h2>
                    directed by: {this.props.movieDetails.Director}
                </h2>
                <h3>
                    <span>StoryLine:</span>
                    {
                        this.props.movieDetails.Plot
                    }
                </h3>
            </div>

          </Dialog>
      </div>
    )
  }
}
