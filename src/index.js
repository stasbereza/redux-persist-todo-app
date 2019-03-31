import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import I18n from 'redux-i18n';
import translations from './translations';
import App from 'components/App/App';
import store, { persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18n translations={translations} initialLang="en" fallbackLang="en">
        <App />
      </I18n>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
