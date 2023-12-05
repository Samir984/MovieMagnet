const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDM1NjJiNDhmNDhhZWUwOWM0ZmZlYjgxNTRmNjg4ZCIsInN1YiI6IjY1NmM4YjcxNjUxN2Q2MDBjYzQxZDJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MF0v7SgnBGj6Jonclj_NoKyAWV3tevjQZQrcpbFTOD8";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};
