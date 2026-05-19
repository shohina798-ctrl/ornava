import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18next';
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
         <Toaster position="top-20 right-10" reverseOrder={true}/>
      </QueryClientProvider>
  </StrictMode>,
)