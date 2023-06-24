import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';
import { Platform } from './usePlatforms';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ['games', gameQuery],
    defaultPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, allPages);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
