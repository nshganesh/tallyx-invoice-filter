/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  currency: {
    id: `${scope}.currency`,
    defaultMessage: 'Currency'
  },
  amountRange: {
    id: `${scope}.amountRange`,
    defaultMessage: 'Amount'
  },
  maturityDateRange: {
    id: `${scope}.maturityDateRange`,
    defaultMessage: 'Maturity'
  },
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: 'Unable to filter out invoices'
  },
});
