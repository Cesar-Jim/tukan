import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tukan</title>
        <meta
          name="description"
          content="Aprende a producir tus propios productos de cuidado personal y del hogar, ¡sin químicos!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        fontFamily="tukan.regular"
        fontWeight="regular"
        fontSize="tukan.md"
      >
        TEST
      </Flex>
    </div>
  );
}
