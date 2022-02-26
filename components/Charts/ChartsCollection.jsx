import { useContext, useEffect } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Spinner,
} from '@chakra-ui/react';

import ChartComponent from './ChartComponent';
import AppContext from '../../context/context';

const ChartsCollection = () => {
  const { data, isLoading } = useContext(AppContext);

  useEffect(() => {}, [data]);

  return (
    <Flex
      width={['300px', '400px', '700px', '900px', '900px', '1000px']}
      height="300px"
      m="12px auto"
      justifyContent="center"
    >
      {isLoading ? (
        <Spinner m="20% 0" />
      ) : (
        <Tabs isFitted width="100%" m="48px 0">
          <TabList justifyContent="space-evenly" pb="8px">
            {data
              ? data.map((chart) => {
                  return <Tab key={chart.idSerie}>{chart.idSerie}</Tab>;
                })
              : 'Charts will show up down below as individual tabs when data is available. Go ahead and fetch data.'}
          </TabList>

          <TabPanels>
            {data ? (
              data.map((chart) => {
                return (
                  <TabPanel key={chart.idSerie}>
                    <ChartComponent
                      chartData={chart.datos}
                      title={`${chart.idSerie} - ${chart.titulo}`}
                      subtitle={`${chart.idSerie}`}
                    />
                  </TabPanel>
                );
              })
            ) : (
              <TabPanel textAlign="center" fontSize="1.75rem" fontWeight="thin">
                <p>¯\_(ツ)_/¯</p>
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
      )}
    </Flex>
  );
};

export default ChartsCollection;
