/**
 *
 * CurrencySelector
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { currencies } from 'containers/HomePage/reducer';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const CurrencySelector = (props) => {
  const [open, setOpen] = useState(props.open || false)

  return (
    <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
      <DropdownToggle caret>
        {props.currency.slug}
      </DropdownToggle>
      <DropdownMenu>
        {
          currencies.map(item =>
            <DropdownItem key={item.slug} onClick={() => props.onChange(item)}>{item.slug}</DropdownItem>)
        }
      </DropdownMenu>
    </Dropdown>
  );
}

CurrencySelector.propTypes = {};

export default CurrencySelector;
