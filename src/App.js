import React from 'react';
import { Footer } from './components/shared/Footer/Footer';

import { MainContent } from './components/shared/MainComponent';
import { Header } from './components/shared/Header/Header';

/*Redux*/
import { Provider } from 'react-redux';
import { store } from './store/store';





export const App = () => {
  return (
    <Provider store={store}>
      <Header />

      <MainContent />

       <Footer />

    </Provider>
  );
}