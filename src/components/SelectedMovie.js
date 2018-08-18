import React, { Component, Fragment } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Chip from '@material-ui/core/Chip'
import CircularProgress from '@material-ui/core/CircularProgress'
function Transition(props) {
    return <Slide direction="up" {...props}/>
}

export default class SelectedMovie extends Component {

    // shouldComponentUpdate = (next) => {
    //     if(this.props !== next) {
    //         setTimeout(()=> {
    //             document.querySelector('.loader').style.display = "none"
    //         },3000);
    //         return true
    //     }else{
    //         setTimeout(()=> {
    //             document.querySelector('.loader').style.display = "none"
    //         },3000);
    //         return false
    //     }
    // }

        // componentDidMount = () => {
        //     setTimeout(()=> {
        //         document.querySelector('.loader2').style.display = "none"
        //     },3000);
        // }
    
  render() {
     if(this.props.movieDetails) {
         return (
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
                
                     
                    <Fragment>
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
                        <span>IMDB rating:</span> {this.props.movieDetails.imdbRating}
                    </h2>   
                    <h2>
                        <span>released in:</span> {this.props.movieDetails.Released}
                    </h2>
                    <h2>
                        <span>directed by:</span> {this.props.movieDetails.Director}
                    </h2>
                    <h2>
                        <span>actors: </span>{this.props.movieDetails.Actors}
                    </h2>
                    <h2>
                        <span>production:</span> {this.props.movieDetails.Production}
                    </h2>
                    <h3>
                        <span>StoryLine:</span>
                        {
                            this.props.movieDetails.Plot
                        }
                    </h3>
                    
                </div>
                    </Fragment>
              </Dialog>
         )
     }
    return (
      <div>
          <div className="loader2"><CircularProgress/></div> 
          
      </div>
    )
  }
}
