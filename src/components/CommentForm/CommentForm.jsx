import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { addComment } from 'redux/actions/actions';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import SharedButton from 'components/SharedButton/SharedButton';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    marginRight: theme.spacing.unit * 4,
  },
  textField: {
    width: 300,
    marginRight: theme.spacing.unit * 8,
  },
});

const initialState = {
  comment: '',
};

class CommentForm extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      container: PropTypes.string,
      avatar: PropTypes.string,
      textField: PropTypes.string,
    }).isRequired,
    onAddComment: PropTypes.func.isRequired,
  };

  state = {
    ...initialState,
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    const { onAddComment } = this.props;
    const { comment } = this.state;

    if (comment === '') return;

    onAddComment(comment);

    this.setState({ ...initialState });
  };

  render() {
    const { classes } = this.props;
    const { comment } = this.state;
    const { t } = this.context;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}>
        <Avatar className={classes.avatar} />
        <TextField
          id="standard-textarea"
          label={t('Comment')}
          name="comment"
          value={comment}
          className={classes.textField}
          placeholder={t('Type a comment here...')}
          multiline
          margin="normal"
          onChange={this.handleChange}
        />
        <SharedButton text={t('add new')} onClick={this.handleSubmit} />
      </form>
    );
  }
}

CommentForm.contextTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lang: state.i18nState.lang,
});

const mapDispatchToProps = dispatch => ({
  onAddComment: text => dispatch(addComment(text)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStyles(styles),
)(CommentForm);
