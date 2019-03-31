import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SharedButton = ({
  text,
  variant,
  color,
  children,
  className,
  onClick,
}) => (
  <div>
    <Button
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}>
      {children}
      {text}
    </Button>
  </div>
);

SharedButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SharedButton.defaultProps = {
  text: 'button',
  variant: 'contained',
  color: 'primary',
  className: '',
  children: [],
  onClick: () => {},
};

export default SharedButton;
