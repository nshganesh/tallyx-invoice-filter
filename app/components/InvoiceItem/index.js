/**
 *
 * InvoiceItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Col, Card, CardTitle } from 'reactstrap'

const InvoiceItem = (props) => {
  return (
    <Col className="my-2" sm="6" md="4">
      <Card body>
        <CardTitle>Reference: <strong>{props.invoice.reference}</strong></CardTitle>
        <p>Invoice ID: <strong>{props.invoice.id}</strong></p>
        <p>Maturity Date: <strong>{props.invoice.maturity_date}</strong></p>
        <p>Invoice Amount: <strong>{props.invoice.amount}</strong></p>
        <p>CCY: <strong>{props.invoice.Ccy}</strong></p>
        <p>Buyer: <strong>{props.invoice.buyer}</strong></p>
        <p>Supplier: <strong>{props.invoice.supplier}</strong></p>
        <p>Invoice Generated Date: <strong>{props.invoice.invoiced_at}</strong></p>
      </Card>
    </Col>
  );
}

InvoiceItem.propTypes = {};

export default InvoiceItem;