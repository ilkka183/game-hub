import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic: number;
}

function useGames(gameQuery: GameQuery) {
  return useData<Game>("/games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id }}, [gameQuery]);
}

export default useGames;
