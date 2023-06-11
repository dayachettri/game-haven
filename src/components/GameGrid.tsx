import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 6 }, (_, index) => index + 1);

  const renderedGameCards: JSX.Element[] = data.map(game => (
    <GameCardContainer key={game.id}>
      <GameCard game={game} />
    </GameCardContainer>
  ));

  const renderedSkeletons: JSX.Element[] = skeletons.map(skeleton => (
    <GameCardContainer key={skeleton}>
      <GameCardSkeleton />
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
