import React from 'react'

import MoviesCard from '@/components/MoviesCard';
import { Metadata } from 'next';

const Movies = async() => {
  const url:any = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0f1b928d64msh742587cdc6d5bc0p1cfc49jsn0c3ba6b3ea9c',
    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
  }
};

const res = await fetch(url,options);
const data = await res.json();
const main = data.movies;
// console.log(main)
// const maindata =  data[0];
// const main =  data[1];
// const thefinal = main.episodes
// const final = maindata.episodes
// //console.log(final);
// const combinedEpisodes = [...final, ...thefinal];

  return (
   <>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {main.map((curElem: any) => { 
    return <MoviesCard key={curElem._id} {...curElem} />
  })}





</div>

   </>

  )
}

export default Movies
export const metadata: Metadata = {
  title: "Browse and Discover Movies: Explore Our Curated Collection",
  description: "Explore our extensive movie catalog, featuring a diverse range of genres and titles. From the latest releases to timeless classics, our platform provides detailed information, reviews, and ratings to help you find your next favorite film. Enjoy a seamless browsing experience and stay updated with the most popular and critically acclaimed movies in cinema today.",
};