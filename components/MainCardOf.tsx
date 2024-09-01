import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const MainCardOf = ({
	title,
	image,
	description,
}: {
	title: string;
	image: string;
	description: string;
}) => {
	return (
		<div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 m-4 flex flex-col justify-between">
	<div>
		<div className="relative">
			<img className="w-full h-4/5 object-cover" src={image} alt={title} />
			<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
				<h3 className="text-white text-lg font-semibold">{title}</h3>
			</div>
		</div>
		<div className="p-6">
			<p className="text-sm leading-relaxed">{description}</p>
		</div>
	</div>
	<div className="px-6 pb-4 mt-auto">
		<Link href="/movies">
			<Button variant="default" className="w-full text-xs py-2">
				View Now
			</Button>
		</Link>
	</div>
</div>

	);
};

export default MainCardOf;
