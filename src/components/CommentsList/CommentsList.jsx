import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Comment from 'components/Comment/Comment';

const styles = () => ({
  list: {
    paddingLeft: 0,
    listStyle: 'none',
  },
});

const CommentsList = ({ activeItem, classes }, context) => {
  const commentsJSX =
    // eslint-disable-next-line no-nested-ternary
    activeItem !== undefined ? (
      activeItem.comments.length > 0 ? (
        activeItem.comments.map(comment => (
          <li key={comment.id}>
            <Comment elevation={1} {...comment} />
          </li>
        ))
      ) : (
        <Typography variant="h5" component="h5">
          {context.t(
            'There are no comments for this task. You could add a new one.',
          )}
        </Typography>
      )
    ) : (
      <Typography variant="h5" component="h5">
        {context.t(
          'There are no comments yet. Choose a task by clicking on it and type a comment.',
        )}
      </Typography>
    );

  return <ul className={classes.list}>{commentsJSX}</ul>;
};

CommentsList.propTypes = {
  activeItem: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    isActive: PropTypes.bool,
    comments: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.id, text: PropTypes.string }),
    ),
  }),
  classes: PropTypes.shape({
    list: PropTypes.string,
  }).isRequired,
};

CommentsList.defaultProps = {
  activeItem: undefined,
};

CommentsList.contextTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activeItem: state.items.find(item => item.isActive && item),
  lang: state.i18nState.lang,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withStyles(styles),
)(CommentsList);
