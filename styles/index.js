import { extendTheme } from '@chakra-ui/react';

// Overriding imports
import breakpoints from './theme/foundations/breakpoints';
import fonts from './theme/foundations/typography';
import colors from './theme/foundations/colors';

const overrides = {
  ...extendTheme,
  breakpoints,
  ...fonts,
  ...colors,
};

export default extendTheme(overrides);
