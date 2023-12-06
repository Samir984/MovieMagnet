const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDM1NjJiNDhmNDhhZWUwOWM0ZmZlYjgxNTRmNjg4ZCIsInN1YiI6IjY1NmM4YjcxNjUxN2Q2MDBjYzQxZDJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MF0v7SgnBGj6Jonclj_NoKyAWV3tevjQZQrcpbFTOD8";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export async function getApiData(endPoint) {
  // console.log(`${BASE_URL}/${endPoint}`);
  try {
    const res = await fetch(`${BASE_URL}/${endPoint}`, options);
    if (!res.ok) throw new Error("Something when wrong");
    const data = await res.json();
    return data;
  } catch (err) {
    console.err(err);
    return err;
  }
}
