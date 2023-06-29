import { useEffect, useState } from 'react';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [arraySearchMovies, setArraySearchMovies] = useState([]);
  //   useEffect(() => {}, []);
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
      {arraySearchMovies.map(({ id, original_title }) => {
        return (
          <div key={id} to={id}>
            {original_title}
          </div>
        );
      })}
    </>
  );
};
