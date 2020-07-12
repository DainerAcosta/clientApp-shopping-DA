import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import AppRouter from './routers/AppRouter';
import { GlobalStyle } from './styles/global.style';


const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
