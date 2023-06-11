import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const renderedGameCards: JSX.Element[] = games.map(game => (
    <GameCardContainer>
      <GameCard game={game} key={game.id} />
    </GameCardContainer>
  ));

  const renderedSkeletons: JSX.Element[] = skeletons.map(skeleton => (
    <GameCardContainer>
      <GameCardSkeleton key={skeleton} />
    </GameCardContainer>
  ));

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading && renderedSkeletons}
        {renderedGameCards}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
