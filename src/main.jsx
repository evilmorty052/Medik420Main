import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserContextProvider from './contexts/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/pages/App.css'
import SidebarProvider from './contexts/SidebarContext';
import PaymentModalProvider from './contexts/PaymentModalContext';
import ('preline')




const queryClient = new QueryClient();




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient} retry={6} >
  {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <Router>
          <UserContextProvider>
            <SidebarProvider>
              <PaymentModalProvider>
              <App />
              </PaymentModalProvider>
            </SidebarProvider>
          </UserContextProvider>
    </Router>
</QueryClientProvider>  
  </React.StrictMode>
);



