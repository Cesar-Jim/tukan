// import '../styles/globals.css'
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { retrieveChartData } from '../utils/data-utilities-';

// styles
import GlobalReset from '../styles/theme/global-reset';
import theme from '../styles/index';

function App({ Component, pageProps }) {
  // useEffect(async () => {
  //   // const chartData = await retrieveChartData('sx'); // try this to force a fetching error
  //   const chartData = await retrieveChartData('SF61745');
  //   console.log('CHARTDATA', chartData);
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <GlobalReset>
        <Component {...pageProps} />
      </GlobalReset>
    </ChakraProvider>
  );
}

export default App;
