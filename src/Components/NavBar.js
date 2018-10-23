import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
  

const styles = {
  root: {
    flexGrow: 1,
    
  },
  NavBar: {
    backgroundColor: '#D500F9',
  },
};

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value }) ;
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary" 
          centered
        >
                      <Link style = {{textDecoration: 'none'}} to ='/'><Tab label="Your Album" /></Link>
          <Link style = {{textDecoration: 'none'}} to ='/SharedAlbum'><Tab label="Shared Album" /></Link>
          <Link style = {{textDecoration: 'none'}} to ='/TheirAlbum'><Tab label="Their Album" /></Link>
          <Link style ={{textDecoration: 'none'}} to ='/AlbumStatus'><Tab label="Album Status" /></Link>
          <Link style ={{textDecoration: 'none'}} to='/TheirStatus'><Tab label="Their Album Status" /></Link>
          
          <Tab label="Album Status"  to='/AlbumStatus' component={Link}/>
        </Tabs>
      </Paper>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
