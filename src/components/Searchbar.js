import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from'@material-ui/core/Slide'
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Back from '@material-ui/icons/ArrowBack'

function Transition(props) {
    return <Slide direction="left" {...props} />;
}

export default class Searchbar extends Component {
    state = {
        query: ''
    }

    handleChange = (e) => {
        this.setState({query: e.target.value});
    }

    submit = (e) => {
        if(e.which === 13) {
            if(this.state.query !== '') {
                this.props.submit(this.state.query);
                this.setState({query: ''});
                this.props.handleClose();
            }
            
        }
    }

    
    render() {
        return (
        <div>
            <Dialog fullScreen
            open={this.props.isopen}
            TransitionComponent={Transition}
            transitionDuration={300}
            >
                <Appbar style={{backgroundColor: '#fff'}}>
                    <Toolbar>
                        <IconButton onClick={() => this.props.handleClose()}>
                            <Back/>
                        </IconButton>
                        <div className="search_box" onKeyPress={this.submit}>
                            <input 
                            type="text" 
                            autoFocus 
                            value={this.state.query}
                            onChange={this.handleChange} 
                            placeholder="Search by Movie names"/>
                        </div>  
                    </Toolbar>    
                </Appbar>   
            </Dialog>
        </div>
        )
        }
    }
