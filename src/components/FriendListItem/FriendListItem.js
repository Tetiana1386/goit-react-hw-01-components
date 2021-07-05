import React from 'react';
import PropTypes from 'prop-types';
import defaultFoto from '../../components/Profile/default-foto.jpeg';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    <span class="status"></span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultFoto,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
