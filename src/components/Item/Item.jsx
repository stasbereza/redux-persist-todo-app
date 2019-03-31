import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SharedButton from 'components/SharedButton/SharedButton';
import { deleteItem, setActiveItem } from 'redux/actions/actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  active: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

const Item = ({
  id,
  text,
  isActive,
  classes,
  onSetActiveItem,
  onDeleteItem,
}) => (
  <>
    <Paper
      className={classNames(classes.root, isActive && classes.active)}
      elevation={1}
      onClick={() => onSetActiveItem(id)}>
      <Typography component="p">{text}</Typography>
      <SharedButton
        variant="outlined"
        color="secondary"
        text="delete"
        onClick={() => onDeleteItem(id)}
      />
    </Paper>
  </>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  onSetActiveItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDeleteItem: id => dispatch(deleteItem(id)),
  onSetActiveItem: id => dispatch(setActiveItem(id)),
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withStyles(styles),
)(Item);
