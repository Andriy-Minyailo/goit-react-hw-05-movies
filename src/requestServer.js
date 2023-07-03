import axios from 'axios';

export class RequestServer {
  static url = 'https://api.themoviedb.org/3/';
  static key = 'ce77ddb03ebd0577ea6b19d0dd53be3c';

  trendingDay() {
    return axios.get(
      `${RequestServer.url}trending/movie/day?api_key=${RequestServer.key}`
    );
  }
  searchMovies(value) {
    return axios.get(
      `${RequestServer.url}search/movie?api_key=${RequestServer.key}&language=en-US&query=${value}`
    );
  }
  movieDetails(movieId) {
    return axios.get(
      `${RequestServer.url}movie/${movieId}?api_key=${RequestServer.key}&language=en-US`
    );
  }
  movieReviews(movieId) {
    return axios.get(
      `${RequestServer.url}movie/${movieId}/reviews?api_key=${RequestServer.key}&language=en-US`
    );
  }
  movieCast(movieId) {
    return axios.get(
      `${RequestServer.url}movie/${movieId}/credits?api_key=${RequestServer.key}&language=en-US`
    );
  }
}
