import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </Provider>
)