import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      alignItems="center"
      flexDir="column"
      m="auto"
      position="absolute"
      left={0}
      right={0}
      bottom={-300}
    >
      <Text fontSize="xs">Designed & Coded by César Jiménez</Text>
      <Text fontSize="xs">
        <strong>February 26th 2022</strong>
      </Text>
    </Flex>
  );
};

export default Footer;
