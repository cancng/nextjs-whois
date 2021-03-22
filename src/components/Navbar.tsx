import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useRouter } from 'next/router';

const NavbarLink = ({ url, name }: { url: string; name: string }) => {
  const router = useRouter();

  const activePage = url === router.pathname;

  const activeLinkColor = useColorModeValue(
    activePage ? 'blackAlpha.600' : 'blackAlpha.800',
    activePage ? 'whiteAlpha.600' : 'whiteAlpha.800'
  );

  return (
    <Link href={url}>
      <Button color={activeLinkColor} variant='ghost' size='sm'>
        {name}
      </Button>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Box as='header' py='2' bg='blackAlpha.100' mb='10'>
      <Container maxWidth='6xl'>
        <Stack
          as='nav'
          direction={['column', 'row']}
          spacing='3'
          alignItems='center'
        >
          <Text fontWeight='bold'>WHOIS</Text>
          <NavbarLink name='Homepage' url='/' />
          {/* <NavbarLink name='Site Ayarları' url='/settings' /> */}
          <Box mx='auto' />
          <ColorModeSwitcher />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
