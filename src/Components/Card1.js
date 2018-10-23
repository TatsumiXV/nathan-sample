import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import coffeeImg from '../Assets/coffee.jpg';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Card1 extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (

      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Nathan" className={classes.avatar}>
              N
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Coffee!"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={coffeeImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Coffee A Day Make the Stress Away :)
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Making a Great Morning Coffee</Typography>
    
            <Typography paragraph>
            Method 1 Making Basic Instant Coffee
            <br></br>
            Heat up a cup of water. 
            <br></br>
            Add 1 to 2 teaspoons of instant coffee to a mug. 
            <br></br>
            Dissolve the coffee with a tablespoon of cold water. 
            <br></br>
            Pour the hot water into the mug. 
            <br></br>
            Mix in sugar or spices, if desired. 
            <br></br>
            Add milk or cream if you're not a fan of black coffee.
            <br></br>
            Stir your coffee and serve it.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Card1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card1);
