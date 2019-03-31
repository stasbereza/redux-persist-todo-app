import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SharedButton from 'components/SharedButton/SharedButton';
import { addItem } from 'redux/actions/actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  textField: {
    width: 300,
    marginRight: theme.spacing.unit * 8,
  },
});

const initialState = {
  item: '',
};

class ItemsForm extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      container: PropTypes.string,
      textField: PropTypes.string,
    }).isRequired,
    onAddItem: PropTypes.func.isRequired,
  };

  state = {
    ...initialState,
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    const { onAddItem } = this.props;
    const { item } = this.state;

    if (item === '') return;

    onAddItem(item);

    this.setState({ ...initialState });
  };

  render() {
    const { classes } = this.props;
    const { item } = this.state;
    const { t } = this.context;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}>
        <TextField
          id="standard-with-placeholder"
          label={t('Task')}
          name="item"
          value={item}
          className={classes.textField}
          placeholder={t('Type task here...')}
          margin="normal"
          onChange={this.handleChange}
        />
        <SharedButton text={t('add new')} onClick={this.handleSubmit} />
      </form>
    );
  }
}

ItemsForm.contextTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lang: state.i18nState.lang,
});

const mapDispatchToProps = dispatch => ({
  onAddItem: text => dispatch(addItem(text)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStyles(styles),
)(ItemsForm);
