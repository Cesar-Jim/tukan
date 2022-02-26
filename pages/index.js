import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import Title from '../components/heading/Title';
import Form from '../components/form/Form';
import ChartsCollection from '../components/Charts/ChartsCollection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tukan</title>
        <meta
          name="description"
          content="Visualizador de gráficas del Banco de México"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column">
        <Title text="Banxico API Chart Visualizer" />
        <Form />
        <ChartsCollection />
        <Footer />
      </Flex>
    </>
  );
}
