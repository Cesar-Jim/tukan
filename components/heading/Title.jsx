import { Flex, Heading } from '@chakra-ui/react';

const Title = ({ text }) => {
  return (
    <Flex justifyContent="center" m="36px 0 48px 0">
      <Heading color="twitter.500">{text}</Heading>
    </Flex>
  );
};

export default Title;
