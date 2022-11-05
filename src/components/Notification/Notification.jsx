import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from './Notification.styled';

export const Notification = ({ message }) => <Notify>{message}</Notify>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
