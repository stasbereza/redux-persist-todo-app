import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import ItemsForm from 'components/ItemsForm/ItemsForm';
import ItemsList from 'components/ItemsList/ItemsList';
import CommentForm from 'components/CommentForm/CommentForm';
import CommentsList from 'components/CommentsList/CommentsList';
import SelectLocaleForm from '../SelectLocaleForm/SelectLocaleForm';

const Box = styled.div`${palette}${spacing}${typography}`;

const styles = theme => ({
  container: {
    width: '100%',
  },
  mainBox: {
    display: 'flex',
    height: '100vh',
  },
  box: {
    position: 'relative',
    flexGrow: 1,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const App = ({ theme, classes }, context) => {
  const primaryText = theme.palette.text.primary;
  const primaryColor = theme.palette.grey;

  const themeStyles = {
    primaryText: {
      backgroundColor: theme.palette.background.default,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: primaryText,
    },
    primaryColor: {
      backgroundColor: primaryColor,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: theme.palette.common.white,
    },
  };

  return (
    <div className={classes.container}>
      <Box className={classes.mainBox}>
        <Box className={classes.box} p={3} bgcolor="grey">
          <Typography
            variant="h2"
            component="h1"
            style={themeStyles.primaryColor}>
            {context.t('todo'.toUpperCase())}
          </Typography>
          <SelectLocaleForm />
        </Box>
        <Box className={classes.box} p={3}>
          <Typography
            variant="h3"
            component="h2"
            style={themeStyles.primaryText}>
            {context.t('Items')}
          </Typography>
          <ItemsForm />
          <ItemsList />
        </Box>
        <Box className={classes.box} p={3}>
          <Typography
            variant="h3"
            component="h2"
            style={themeStyles.primaryText}>
            {context.t('Comments')}
          </Typography>
          <CommentsList />
          <CommentForm />
        </Box>
      </Box>
    </div>
  );
};

App.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string,
    mainBox: PropTypes.string,
    box: PropTypes.string,
    iconSmall: PropTypes.string,
    leftIcon: PropTypes.string,
  }).isRequired,
};

App.contextTypes = {
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
  withTheme(),
  withStyles(styles),
)(App);
