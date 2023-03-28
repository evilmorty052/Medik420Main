import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import UserContextProvider from './contexts/mojocontext';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/pages/App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { store } from './Redux/store';
import {Provider} from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { StreamProvider } from './contexts/StreamContext';




const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

   <QueryClientProvider client={queryClient} retry={6} >
  {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <Router>
       <AuthContextProvider>
        <StreamProvider>
           <App />
        </StreamProvider>
       </AuthContextProvider>
    </Router>
</QueryClientProvider>  
    </Provider>
  </React.StrictMode>
);



