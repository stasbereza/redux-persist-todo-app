import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Item from 'components/Item/Item';

const styles = () => ({
  list: {
    paddingLeft: 0,
    listStyle: 'none',
  },
});

const ItemsList = ({ items, classes }, context) => {
  const itemsJSX =
    items.length > 0 ? (
      items.map(item => (
        <li key={item.id}>
          <Item elevation={1} {...item} />
        </li>
      ))
    ) : (
      <Typography variant="h5" component="h5">
        {context.t('There are no tasks yet. Please, add a new one.')}
      </Typography>
    );

  return <ul className={classes.list}>{itemsJSX}</ul>;
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      text: PropTypes.string,
      isActive: PropTypes.bool,
      comments: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.id, text: PropTypes.string }),
      ),
    }),
  ),
  classes: PropTypes.shape({
    list: PropTypes.string,
  }).isRequired,
};

ItemsList.defaultProps = {
  items: [],
};

ItemsList.contextTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
  lang: state.i18nState.lang,
});

export default compose(
  connect(
    mapStateToProps,
    null,
  ),
  withStyles(styles),
)(ItemsList);
