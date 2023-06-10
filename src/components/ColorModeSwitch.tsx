import {
  FormLabel,
  HStack,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  console.log(colorMode);

  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
        colorScheme="green"
        id="mode-switch"
      />
      <FormLabel htmlFor="mode-switch" margin="0">
        <Text userSelect="none" cursor="pointer">
          {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </FormLabel>
    </HStack>
  );
}

export default ColorModeSwitch;
