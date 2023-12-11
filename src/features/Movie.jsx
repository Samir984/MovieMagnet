function Movie() {
  

  return <div className="p-2 m-2 mt-12">

  </div>;
}

export default Movie;


// {
//   "genres": [
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 12,
//       "name": "Adventure"
//     },
//     {
//       "id": 16,
//       "name": "Animation"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     },
//     {
//       "id": 80,
//       "name": "Crime"
//     },
 
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 10751,
//       "name": "Family"
//     },
//     {
//       "id": 14,
//       "name": "Fantasy"
//     },
  
//     {
//       "id": 27,
//       "name": "Horror"
//     },

//     {
//       "id": 9648,
//       "name": "Mystery"
//     },
//     {
//       "id": 10749,
//       "name": "Romance"
//     },
//     {
//       "id": 878,
//       "name": "Science Fiction"
//     },
//     {
//       "id": 10770,
//       "name": "TV Movie"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
  
  
//   ]
// }

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDM1NjJiNDhmNDhhZWUwOWM0ZmZlYjgxNTRmNjg4ZCIsInN1YiI6IjY1NmM4YjcxNjUxN2Q2MDBjYzQxZDJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MF0v7SgnBGj6Jonclj_NoKyAWV3tevjQZQrcpbFTOD8'
//   }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=vote_count.asc&with_genres=animation', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));