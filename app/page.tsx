import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MainCardOf from "@/components/MainCardOf";

export default function Home() {
  return (
   <>
   <Hero/>
   <div className=" flex md:flex-nowrap sm:flex flex-wrap ">

   <MainCardOf  title = "The Flash"
      image = "/c4.jpg"
      description = "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by light..."/>
   <MainCardOf  title = "Mayor of Kingstown"
      image = "/c2.jpg"
      description = "In a small Michigan town where the business of incarceration is the only thriving industry, the Mc..."/>
   <MainCardOf  title = "Law & Order"
      image = "/c3.jpg"
      description = "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing t..."/>
   <MainCardOf  title = "Wednesday"
      image = "/c1.jpg"
      description = "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to mas..."/>
      </div>
      <Gallery/>
      
	<h2 className="text-3xl font-semibold my-6 text-center">Featured Show</h2> {/* Centered Heading */}
      <div className=" flex md:flex-nowrap sm:flex flex-wrap ">
	<MainCardOf 
		title="Peaky Blinders"
		image="/c7.jpg"
		description="A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades..."
	/>
   <MainCardOf 
		title="The Good Doctor"
		image="/c8.jpg"
		description="Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life..."
	/>
   <MainCardOf 
		title="Bones"
		image="/c9.jpg"
		description="Dr. Temperance Brennan and her colleagues at the Jeffersonian's Medico-Legal Lab assist Special Ag..."
	/></div>
      <Blog/>
   </>
   
  );
}
