import { ListMovies } from 'components/ListMovies/ListMovies';
import { useEffect, useState } from 'react';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const Home = () => {
  const [arrayMovies, setArrayMovies] = useState([]);

  useEffect(() => {
    console.log('test');
    const fetchTrendMovies = async () => {
      try {
        const {
          data: { results },
        } = await requestServer.trendingDay();
        setArrayMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListMovies arrayMovies={arrayMovies} />
    </>
  );
};
