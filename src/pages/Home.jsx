import { useEffect, useState } from 'react';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();


export const Home = () => {
    const [arrayMovies, setArrayMovies] = useState([]);
    
    useEffect(()=> {
    const fetchTrendMovies = async() => {
        try {
            const {data: {results}} = await requestServer.trendingDay();
            setArrayMovies(results);
                   } catch(error) {
            console.log(error)
        }
        
        
        }
                  fetchTrendMovies();
    }, [])
    


    return (
    <>
    <h1>Trending today</h1>
        <div>
            {arrayMovies.map(({id, original_title
}) => {
                return <div key={id} to={id}>
                    {original_title}
                </div>
            } )}
        </div>
        </>
    )
}