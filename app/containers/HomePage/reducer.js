/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import * as types from './constants';

export const currencies = [
  {
    locale: "en-US",
    slug: "USD",
  },
  {
    locale: "en-IN",
    slug: "INR",
  },
  {
    locale: "en-US",
    slug: "JPY",
  },
  {
    locale: "en-IN",
    slug: "RYD",
  }
]
// The initial state of the App
export const initialState = {
  currency: currencies[0],
  amountRange: {
    min: "",
    max: "",
  },
  dateRange: [new Date('01/01/2019'), new Date('01/01/2020')],
  loading: false,
  error: null,
  invoices: [],
  showInvoiceList: false
};



/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.CURRENCY_CHANGED:
        draft.currency = action.payload.currency
        draft.showInvoiceList = false
        break;
      case types.AMOUNT_RANGE_CHANGED:
        draft.amountRange = action.payload.amount
        draft.showInvoiceList = false
        break;
      case types.DATE_RANGE_CHANGED:
        draft.dateRange = action.payload.date
        draft.showInvoiceList = false
        break;
      case types.FILTER_INVOICE_START:
        draft.loading = true;
        draft.error = null;
        draft.showInvoiceList = false
        break;
      case types.FILTER_INVOICE_SUCCESS:
        draft.invoices = action.payload.invoices
        draft.showInvoiceList = true
        draft.loading = false;
        break;
      case types.FILTER_INVOICE_FAILURE:
        draft.error = "Unable to filter out the invoices"
        draft.showInvoiceList = false
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
