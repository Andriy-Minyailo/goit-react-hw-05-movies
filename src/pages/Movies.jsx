import { ListMovies } from 'components/ListMovies/ListMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [arraySearchMovies, setArraySearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  // const submitSearchMovies = async () => {
  //   try {
  //     const {
  //       data: { results },
  //     } = await requestServer.searchMovies(inputValue);
  //     setArraySearchMovies(results);
  //     setSearchParams({ query: inputValue });
  //     setInputValue('');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const submitSearchMovies = async () => {
      try {
        const {
          data: { results },
        } = await requestServer.searchMovies(query);
        setArraySearchMovies(results);
        // setInputValue('');
      } catch (error) {
        console.log(error);
      }
    };

    submitSearchMovies();
  }, [query]);

  return (
    <>
      <input
        onChange={({ target: { value } }) => setInputValue(value)}
        value={inputValue}
      ></input>
      <button onClick={setSearchParams({ query: inputValue })}>Search</button>
      <ListMovies arrayMovies={arraySearchMovies} />
    </>
  );
};
