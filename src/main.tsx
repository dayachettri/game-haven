import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.tsx';
import theme from './theme.ts';
import './index.css';

const el = document.getElementById('root') as HTMLDivElement;
const root = createRoot(el);
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
