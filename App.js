import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import ShopeNavigator from './navigation/ShopeNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store} >
        <ShopeNavigator />
    </Provider>
  );
}

