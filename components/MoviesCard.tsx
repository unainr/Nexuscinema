import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const MoviesCard = (curElem: any) => {
	return (
		<>
			<div className="p-4">
				<div className="relative h-4/5 w-full overflow-hidden rounded-lg">
					<img
						alt={curElem.original_title}
						className="object-contain  object-center  w-full h-full"
						src={curElem.poster_path}
					/>
				</div>
				<div className="mt-4">
					<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
						{curElem.original_title}
					</h3>
					<p className="mt-1 text-xs max-w-xs">
						{curElem.overview.length > 100
							? `${curElem.overview.substring(0, 98)}...`
							: curElem.overview}
					</p>
					<div className="float-end">
							<Badge variant="outline" >{curElem.first_aired}</Badge>
						</div>
				</div>
				<div className="py-3 flex mx-auto justify-start ">
					<Link href={`/movies/${curElem._id}`}>
						<Button  className="text-xs">
							Read more
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default MoviesCard;
