/**
 *
 * DatePicker
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const DatePicker = (props) => {
  return (
    <Flatpickr
      options={{
        mode: 'range',
        dateFormat: 'd/m/Y',
        altFormat: 'd/m/Y'
      }}
      style={{width: '200px'}}
      value={props.date}
      onChange={props.onChange}
    />
  );
}

DatePicker.propTypes = {};

export default DatePicker;
