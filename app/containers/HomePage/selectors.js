/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectCurrency = () =>
  createSelector(
    selectHome,
    homeState => homeState.currency,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const makeSelectAmountRange = () =>
  createSelector(
    selectHome,
    homeState => homeState.amountRange,
  );

const makeSelectDateRange = () =>
  createSelector(
    selectHome,
    homeState => homeState.dateRange,
  );

const makeSelectInvoices = () =>
  createSelector(
    selectHome,
    homeState => homeState.invoices,
  )

const makeSelectShowInvoiceList = () =>
  createSelector(
    selectHome,
    homeState => homeState.showInvoiceList,
  )

export {
  selectHome,
  makeSelectCurrency,
  makeSelectAmountRange,
  makeSelectDateRange,
  makeSelectError,
  makeSelectLoading,
  makeSelectInvoices,
  makeSelectShowInvoiceList,
};
