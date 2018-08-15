import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Search from '@material-ui/icons/Search'
import Searchbar from './Searchbar'

const style = {
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    }
}


class Navbar extends Component {

    state = {
        open: false
    }

    handleClose = () => {
        this.setState({open: false});
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    submit = (q) => {
        this.props.submit(q);
    }

  render() {
    return (
      <div>
        <AppBar position="fixed" style={{backgroundColor: '#2196f3'}}>
            <Toolbar style={style.flex}>
                <IconButton>
                    <Menu style={{color: '#fff'}}/>
                </IconButton>
                <Typography variant="title" style={{color: '#fff'}}>
                        Movie Search App
                </Typography>
                <IconButton onClick={this.handleOpen}>
                    <Search style={{color: '#fff'}}/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Searchbar isopen={this.state.open} handleClose={this.handleClose} submit={this.submit}/>
        
      </div>
    );
  }
}


export default Navbar;
