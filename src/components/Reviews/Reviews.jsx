import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RequestServer } from 'requestServer';

const requestServer = new RequestServer();

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await requestServer.movieReviews(movieId);
        setReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ul>
      <ReviewsList reviews={reviews} />
    </ul>
  );
};
