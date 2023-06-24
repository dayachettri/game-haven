import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo1.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" borderRadius={10} objectFit="cover" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
