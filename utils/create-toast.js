import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react';
import theme from '../styles/index';

export const toast = createStandaloneToast({ theme });

export const createToast = (props = UseToastOptions) =>
  toast({
    isClosable: true,
    position: 'bottom',
    ...props,
  });
