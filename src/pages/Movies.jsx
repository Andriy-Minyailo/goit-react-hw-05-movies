import { ListMovies } from 'components/ListMovies/ListMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [arraySearchMovies, setArraySearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');
  console.log(queryValue);
  console.log(inputValue);

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    const searchMovies = async () => {
      try {
        const {
          data: { results },
        } = await requestServer.searchMovies(queryValue);
        setArraySearchMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
    setInputValue(queryValue);
  }, [queryValue]);

  const submitButtonSearch = evt => {
    evt.preventDefault();
    if (!inputValue) {
      setArraySearchMovies([]);
      setSearchParams({});
      alert('Enter data to search!');
      return;
    }
    setSearchParams({ query: inputValue });
  };

  return (
    <>
      <form onSubmit={submitButtonSearch}>
        <input
          onChange={({ target: { value } }) => setInputValue(value)}
          value={inputValue}
        ></input>
        <button type="submit">Search</button>
      </form>
      <ListMovies arrayMovies={arraySearchMovies} />
    </>
  );
};
