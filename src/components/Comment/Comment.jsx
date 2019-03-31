import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    display: 'flex',
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  avatar: {
    marginRight: theme.spacing.unit * 4,
  },
});

const Comment = ({ text, classes }) => (
  <>
    <Paper className={classes.root} elevation={1}>
      <Avatar className={classes.avatar} />
      <Typography component="p">{text}</Typography>
    </Paper>
  </>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Comment);
