import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import Seo from '../components/Seo';

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   // (async () => {
  //   //   const {
  //   //     data: { results },
  //   //   } = await axios.get('/api/movies');
  //   console.log('res=>>>>', results);
  //   setMovies(results);
  //   // })();
  // }, []);

  return (
    <div className="container">
      {/* <Seo title="Home" /> */}
      {/* {!movies && <h4>Loading...</h4>} */}
      <ul>
        {results?.map((movie: IMovieProps) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
            <li>{movie.title}</li>
          </div>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/**
 * SSR
 * page가 유저에게 보여지기 전에 props를 받아오는 fn
 * @param params
 * @returns {res}
 */
export async function getServerSideProps({}: GetServerSideProps) {
  const {
    data: { results },
  } = await axios.get('http://localhost:3000/api/movies');

  return {
    props: {
      results,
    },
  };
}
