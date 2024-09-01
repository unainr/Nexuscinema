import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Gallarymain = ({
	gallaryimg,
	gallarytext,
}: {
	gallaryimg: string;
	gallarytext: string;
}) => {
	return (
		<div className="lg:w-1/3 sm:w-1/2 p-4">
			<div className="relative">
				{/* Image */}
				<img
					alt="Gallery image find the best photos"
					className="w-full h-full object-cover object-center rounded-lg"
					src={gallaryimg}
				/>

				{/* Overlay */}
				<div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-10 bg-white bg-opacity-75 rounded-lg shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
					{/* Text */}
					<h1 className="title-font text-lg uppercase font-semibold text-gray-900 mb-3 flex items-center justify-center w-full">
						{gallarytext}
					</h1>

					{/* Button */}
					<Link href={'/movies'}>
					<Button className="mt-4 px-6 py-2">View Now</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Gallarymain;
