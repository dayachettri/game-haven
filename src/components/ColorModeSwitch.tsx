import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  );
}

export default ColorModeSwitch;