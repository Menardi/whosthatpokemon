import { PersistGate } from '@menardi/redux-persist/integration/react';
import { render } from 'preact';
import { Provider } from 'react-redux';

import App from './App';
import { persistor, store } from './store';

document.addEventListener('DOMContentLoaded', () => {
  render((
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  ), document.getElementById('stage')!);
});
