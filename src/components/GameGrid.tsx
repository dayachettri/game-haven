import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

function GameGrid() {
  const { games, error } = useGames();

  const renderedGameCards = games.map(game => (
    <GameCard game={game} key={game.id} />
  ));

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {renderedGameCards}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
