import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const styles = () => ({
  form: {
    position: 'absolute',
    bottom: '25%',
    left: '25%',
  },
  formControl: {
    width: '100px',
  },
});

const locales = ['en', 'ru', 'pl', 'fr'];

class SelectLocaleForm extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    classes: PropTypes.shape({
      form: PropTypes.string,
      formControl: PropTypes.string,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    locale: this.props.lang,
  };

  componentDidUpdate(prevProps) {
    const { locale } = this.state;
    const { dispatch } = this.props;

    if (prevProps.lang !== locale) {
      dispatch(setLanguage(locale));
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    const { locale } = this.state;
    const { t } = this.context;

    const options = locales.map(locale => (
      <MenuItem key={locale} value={locale}>
        {locale.toUpperCase()}
      </MenuItem>
    ));

    return (
      <form className={classes.form} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="locale">{t('Language')}</InputLabel>
          <Select
            autoWidth
            value={locale}
            className={classes.select}
            onChange={this.handleChange}
            inputProps={{
              name: 'locale',
              id: 'locale',
            }}>
            {options}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SelectLocaleForm.contextTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lang: state.i18nState.lang,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withStyles(styles),
)(SelectLocaleForm);
