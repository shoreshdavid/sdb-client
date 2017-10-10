import React from 'react';
import PropTypes from 'prop-types';

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

Login.defaultProps = {
  email: '',
  password: '',
}