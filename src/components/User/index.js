import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  return (
    <div>
      {user.firstName}
      {user.lastName}
      {user.username}
    </div>
  );
}

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

User.defaultProps = {
  firstName: '',
  lastName: '',
  username: '',
}