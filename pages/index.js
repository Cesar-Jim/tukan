import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import Form from '../components/form/Form';
import Title from '../components/heading/Title';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tukan</title>
        <meta
          name="description"
          content="Aprende a producir tus propios productos de cuidado personal y del hogar, ¡sin químicos!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title text="Banxico API Chart Visualizer" />
      <Form />
    </>
  );
}
