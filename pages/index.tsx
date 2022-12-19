import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

const API_KEY = '8ee8be86af25aee825c6ec72430cdced';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      console.log(results);
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      {/* <Seo title="Home" /> */}
      <h1>hi</h1>
      {!movies && <h4>Loading...</h4>}
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
