import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { retrieveChartData } from '../utils/data-utilities-';

// styles
import GlobalReset from '../styles/theme/global-reset';
import theme from '../styles/index';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalReset>
        <Component {...pageProps} />
      </GlobalReset>
    </ChakraProvider>
  );
}

export default App;
