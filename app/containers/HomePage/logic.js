
import { createLogic } from 'redux-logic';
import { LOCATION_CHANGE } from 'connected-react-router';
import { makeSelectInvoice } from './selectors';
import * as types from './constants';
import { invoices } from 'utils/invoice'
import { toNumber, toLocale } from 'utils/utility'

export const currencyChangeLogic = createLogic({
  type: types.CURRENCY_CHANGED,
  cancelType: LOCATION_CHANGE, // cancel if route changes
  latest: true,
  process: ({ getState, action }, dispatch, done) => {
    // add unique tid to action.meta of every action
    const { currency } = action.payload;
    const { amountRange } = getState().home

    dispatch({
      type: types.AMOUNT_RANGE_CHANGED,
      payload: {
        amount: {
          ...amountRange,
          min: toLocale(currency.locale, amountRange.min),
          max: toLocale(currency.locale, amountRange.max),
        }
      }
    })
    done()
  }
})

export const amountFormatLogic = createLogic({
  type: types.AMOUNT_RANGE_CHANGED, // trigger on this action
  cancelType: LOCATION_CHANGE, // cancel if route changes
  latest: true,

  transform: ({ getState, action }, next) => {
    // add unique tid to action.meta of every action
    const { amount } = action.payload;
    const { currency } = getState().home

    const payload = {
      amount: {
        min: toLocale(currency.locale, amount.min),
        max: toLocale(currency.locale, amount.max),
      }
    }
    next({
      ...action,
      payload
    });
  }
});

export const filterInvoiceLogic = createLogic({
  type: types.FILTER_INVOICE_START,
  cancelType: LOCATION_CHANGE,
  latest: true,

  process: ({ getState, action }, dispatch, done) => {
    const { currency, amountRange, dateRange } = getState().home

    const filteredInvoices = invoices.filter(invoice => {
      let isCcySame = invoice.Ccy === currency.slug
      let isAmountInRange = (toNumber(amountRange.min) < toNumber(invoice.amount)) && (toNumber(amountRange.max) > toNumber(invoice.amount))
      let isDateInRange = (new Date(dateRange[0]) < new Date(invoice.maturity_date)) && (new Date(dateRange[1]) > new Date(invoice.maturity_date))
      return  isDateInRange && isCcySame && isAmountInRange
    })

    dispatch({
      type: types.FILTER_INVOICE_SUCCESS,
      payload: {
        invoices: filteredInvoices
      }
    })

    done();
  }
})

export default [
  amountFormatLogic,
  filterInvoiceLogic,
  currencyChangeLogic,
];
