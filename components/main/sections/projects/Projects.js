import projectObjects from "@/lib/projectObjects";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { Bree_Serif } from "next/font/google";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function Projects() {
	return (
		<section
			className="p-4 sm:p-16 min-h-screen bg-slate-800 relative isolate overflow-hidden"
			id="projects"
		>
			{/* <Image
				src={"/personal-website-images/sunflowerrr.webp"}
				alt="a picture of sunflowers"
				width={180}
				height={180}
				className="block absolute -z-50 top-16 -right-16 "
			/>

			<Image
				src={"/personal-website-images/sunflowerrr.webp"}
				alt="a picture of sunflowers"
				width={120}
				height={120}
				className="block absolute -z-50 top-0 right-16 "
			/>
			<Image
				src={"/personal-website-images/sunflowerrr.webp"}
				alt="a picture of sunflowers"
				width={140}
				height={140}
				className="block absolute -z-50 top-2 right-64 "
			/>
			<Image
				src={"/personal-website-images/sunflowerrr.webp"}
				alt="a picture of sunflowers"
				width={240}
				height={240}
				className="block absolute -z-50 bottom-4 -left-28"
			/> */}
			<div className="mb-8 text-neutral-50">
				<h2
					className={`${bree_serif.className} text-emerald-500  text-4xl mb-4 font-semibold text-shadow shadow-black`}
				>
					Projects
				</h2>
				<p className="text-shadow shadow-black mb-4">
					Each project represents each step of my journey to become a Web
					Developer. It doesn't necessarily show great results, but it instead
					tells the story of my learning progress.
				</p>
				<p className="text-shadow shadow-black">
					I do believe that my habits, techqniques, and application skills have
					gotten better after each project. And hopefully, inspecting these
					projects should reflect that.
				</p>
			</div>
			{/* <p className="mb-8 text-sm text-neutral-400 px-2 bg-slate-700 rounded w-fit">
				Note: Lorem ipsum dolor sit amet
			</p> */}
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
				{projectObjects.map((obj) => {
					const {
						projId,
						projTitle,
						projType,
						projDesc,
						projLink,
						projStack,
						projectImg,
					} = obj;

					return (
						<ProjectCard
							key={projId}
							projId={projId}
							projTitle={projTitle}
							projType={projType}
							projDesc={projDesc}
							projLink={projLink}
							projStack={projStack}
							projectImg={projectImg}
						/>
					);
				})}
			</ul>
		</section>
	);
}

export default Projects;
