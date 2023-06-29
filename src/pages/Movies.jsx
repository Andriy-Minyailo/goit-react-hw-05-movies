import { ListMovies } from 'components/ListMovies/ListMovies';
import { useState } from 'react';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [arraySearchMovies, setArraySearchMovies] = useState([]);

  const submitSearchMovies = async () => {
    try {
      const {
        data: { results },
      } = await requestServer.searchMovies(inputValue);
      setArraySearchMovies(results);
      setInputValue('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        onChange={({ target: { value } }) => setInputValue(value)}
        value={inputValue}
      ></input>
      <button onClick={submitSearchMovies}>Search</button>
      <ListMovies arrayMovies={arraySearchMovies} />
    </>
  );
};
