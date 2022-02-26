import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { retrieveChartData } from '../utils/data-utilities-';
import AppState from '../context/state';

// styles
import GlobalReset from '../styles/theme/global-reset';
import theme from '../styles/index';

function App({ Component, pageProps }) {
  return (
    <AppState>
      <ChakraProvider theme={theme}>
        <GlobalReset>
          <Component {...pageProps} />
        </GlobalReset>
      </ChakraProvider>
    </AppState>
  );
}

export default App;
