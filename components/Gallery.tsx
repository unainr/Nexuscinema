import React from "react";
import Gallarymain from "./Gallarymain";

const Gallery = () => {
	return (
		<>
			<section className=" body-font  ">
				<div className="container px-5  mx-auto">
					<div className="flex flex-col text-center w-full my-6">
						<h1 className="sm:text-3xl text-2xl font-medium title-font  ">
							Discover the Magic of Cinema
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-2">
							Dive into a world of captivating films and cinematic experiences.
							From timeless classics to the latest blockbusters, explore
							in-depth reviews, intriguing behind-the-scenes content, and
							exclusive insights into your favorite movies.
						</p>
					</div>
					<div className=" container flex flex-wrap  mx-auto -m-4 ">
						<Gallarymain gallaryimg="/g1.jpg" gallarytext="Now Here" />
						<Gallarymain gallaryimg="/g2.jpg" gallarytext="Hunger" />
						<Gallarymain gallaryimg="/g3.jpg" gallarytext="Venom" />
						<Gallarymain gallaryimg="/g7.jpg" gallarytext="Oblivion" />
						<Gallarymain gallaryimg="/g5.jpg" gallarytext="Megan" />
						<Gallarymain gallaryimg="/g6.jpg" gallarytext="Spider man" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
