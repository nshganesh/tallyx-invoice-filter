/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CURRENCY_CHANGED = 'Tallyx/Home/CURRENCY_CHANGED';
export const AMOUNT_RANGE_CHANGED = 'Tallyx/Home/AMOUNT_RANGE_CHANGED';
export const DATE_RANGE_CHANGED = 'Tallyx/Home/DATE_RANGE_CHANGED'

export const FILTER_INVOICE_START = 'Tallyx/Home/FILTER_INVOICE_START'
export const FILTER_INVOICE_SUCCESS = 'Tallyx/Home/FILTER_INVOICE_SUCCESS'
export const FILTER_INVOICE_FAILURE = 'Tallyx/Home/FILTER_INVOICE_FAILURE'