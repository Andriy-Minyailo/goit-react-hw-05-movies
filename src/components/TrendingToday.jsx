// import { RequestServer } from 'requestServer';

// const requestServer = new RequestServer();

// export const TrendingToday = async () => {
//   try {
//     const trendDay = await requestServer.trendingDay();
//     const { results } = trendDay.data;
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(results);
//   return (
//     <ul>
//       {results.map(el => {
//         return (
//           <trendDayItem
//             key={el.id}
//             id={el.id}
//             url={el.webformatURL}
//             tags={el.tags}
//           />
//         );
//       })}
//     </ul>
//   );
// };
