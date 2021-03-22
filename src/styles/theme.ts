import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  components: {
    Button: {
      baseStyle: { rounded: 'sm' },
    },
  },
  fonts: { body: 'Open Sans', heading: 'Open Sans' },
});
