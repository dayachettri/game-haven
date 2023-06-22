import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

function SortSelector() {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Realease date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  const renderedSortSelectors: JSX.Element[] = sortOrders.map(order => (
    <MenuItem
      onClick={() => setSortOrder(order.value)}
      key={order.value}
      value={order.value}
    >
      {order.label}
    </MenuItem>
  ));

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>{renderedSortSelectors}</MenuList>
    </Menu>
  );
}

export default SortSelector;
