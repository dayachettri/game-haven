import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

const el = document.getElementById('root') as HTMLDivElement;
const root = createRoot(el);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
