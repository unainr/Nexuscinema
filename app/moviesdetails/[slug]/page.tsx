import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MovieDetails = async ({ params }: any) => {
	const id: number = Number(params.slug);
	const url: any = process.env.RAPID_KEY;
	const options = {
		method: "GET",
		headers: {
			"x-rapidapi-key": "0f1b928d64msh742587cdc6d5bc0p1cfc49jsn0c3ba6b3ea9c",
			"x-rapidapi-host": "movies-api14.p.rapidapi.com",
		},
	};
	const res = await fetch(url, options);
	const data = await res.json();
	const main = data.movies;
	const final = main;

	// const maindata = data[0];
	// const main = data[1];
	// const thefinal = main.episodes;
	// const final = maindata.episodes;
	// //console.log(final);
	// const combinedEpisodes = [...final, ...thefinal];
	// const episode = main.find(
	// 	(episode: any) => episode._id === id
	// );
	const episode = final.find((episode: any) => episode._id === id);

	return (
		<>
			<div className="container mx-auto p-4">
				<div className="flex flex-col md:flex-row items-start">
					{/* Image */}
					<div className="flex-1 p-4">
						<div className="relative max-h-svh  w-full overflow-hidden rounded-lg">
							<img
								alt={episode.original_title}
								className="object-cover object-center w-full h-full"
								src={episode.poster_path}
							/>
						</div>
					</div>

					{/* Text Content */}
					<div className="flex-1 p-4">
						<h1 className="text-gray-600    tracking-widest title-font mb-1">
							{episode.original_title}
						</h1>
						<h1 className="mt-4 lg:text-xl  text-sm max-w-fit">
							{episode.overview}
						</h1>
						<div className="py-4">
							<a href="https://netflix.com/"target="_blank"><Button>Watch Netflix</Button></a>
							<Badge className="p-2 float-end" >Date: {episode.first_aired}</Badge>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
