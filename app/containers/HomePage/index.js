/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectLogic } from 'utils/injectLogic';
import { makeSelectCurrency, makeSelectAmountRange, makeSelectDateRange, makeSelectInvoices, makeSelectShowInvoiceList } from './selectors';
import messages from './messages';
import DatePicker from 'components/DatePicker'
import CurrencySelector from 'components/CurrencySelector'
import reducer from './reducer';
import * as types from './constants';
import logic from './logic';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardText,
  CardTitle,
  Table,
} from 'reactstrap';
import InvoiceItem from 'components/InvoiceItem';
import { formatDate } from 'utils/utility'

const key = 'home';


export const HomePage = ({
  currency,
  onCurrencyChange,

  amountRange,
  onAmountChanged,

  dateRange,
  onDateChanged,

  invoices,
  onInvoiceSearch,

  showInvoiceList,
}) => {
  useInjectReducer({ key, reducer });
  useInjectLogic({ key, logic });

  return (
    <article className="pt-4 pb-4 pl-4 pr-4">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="home page"
        />
      </Helmet>
      <>


        <div className="mb-4">
          <h2 style={{ textAlign: 'center' }} className={'mb-4'}>Search Invoice</h2>
          <InputGroup className="mb-4 px-md-5">
            <InputGroupAddon addonType="prepend">

              <CurrencySelector
                currency={currency}
                onChange={onCurrencyChange}
              />

            </InputGroupAddon>
            <Input placeholder={'From Amount'} value={amountRange.min} onChange={(e) => onAmountChanged({ ...amountRange, min: e.target.value })} type="text" />
            <Input placeholder={'To Amount'} value={amountRange.max} onChange={(e) => onAmountChanged({ ...amountRange, max: e.target.value })} type="text" />
            <InputGroupAddon addonType="append">
              <DatePicker
                date={dateRange}
                onChange={onDateChanged}
              />
            </InputGroupAddon>
          </InputGroup>

          <Button className="px-md-5 mx-md-5" onClick={onInvoiceSearch}>Search</Button>
        </div>


        {
          showInvoiceList &&
          <>
            <h5 className="mx-4 px-4">{currency.slug} Invoices with value between {amountRange.min} - {amountRange.max} maturing between {formatDate(dateRange[0])} and {formatDate(dateRange[1])}</h5>

            <Row className="mx-4">
              {
                invoices.map(item =>
                  <InvoiceItem
                    key={item.id}
                    invoice={item}
                  />)
              }
            </Row>
          </>

        }
      </>
    </article>
  );
}

HomePage.propTypes = {
  onCurrencyChange: PropTypes.func,
  currency: PropTypes.object,

  amountRange: PropTypes.object,
  onAmountChanged: PropTypes.func,

  dateRange: PropTypes.array,
  onDateChanged: PropTypes.func,

  onInvoiceSearch: PropTypes.func,
  invoices: PropTypes.array,

  showInvoiceList: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  currency: makeSelectCurrency(),
  amountRange: makeSelectAmountRange(),
  dateRange: makeSelectDateRange(),
  invoices: makeSelectInvoices(),
  showInvoiceList: makeSelectShowInvoiceList(),
});

export const mapDispatchToProps = (dispatch) => ({
  onCurrencyChange: (currency) => dispatch({ type: types.CURRENCY_CHANGED, payload: { currency } }),
  onAmountChanged: (amount) => dispatch({ type: types.AMOUNT_RANGE_CHANGED, payload: { amount } }),
  onDateChanged: (date) => dispatch({ type: types.DATE_RANGE_CHANGED, payload: { date } }),
  onInvoiceSearch: () => dispatch({ type: types.FILTER_INVOICE_START })
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
