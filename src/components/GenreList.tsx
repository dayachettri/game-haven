import useGenres from '../hooks/useGenres';

function GenreList() {
  const { genre, error, isLoading } = useGenres();

  return (
    <ul>
      {genre.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
