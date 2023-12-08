import projectObjects from "@/lib/projectObjects";
import Link from "next/link";
import Image from "next/image";
import { Bree_Serif } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function ProjectPage({ params }) {
	const projectObjArr = projectObjects.filter((obj) => {
		return obj.projId == params.id;
	});
	const projectObj = projectObjArr[0];

	const {
		projTitle,
		projType,
		projDesc,
		projDoc,
		projObjectives,
		projLink,
		projStack,
		projectImg,
	} = projectObj;

	const { imgSrc, imgAlt } = projectImg;

	return (
		<main className=" py-4 bg-slate-900 min-h-screen">
			<Link href={"/#projects"}>
				<span className="material-symbols-outlined size-48 align-middle block ml-4 xs:ml-8 sm:ml-12 text-neutral-50 hover:text-emerald-500 active:text-emerald-600">
					arrow_left_alt
				</span>
			</Link>
			<section className="p-4 xs:p-8 sm:p-12 mt-4 text-neutral-50 rounded">
				<div className="flex flex-col sm:flex-row gap-4 my-8 items-center">
					<Image
						src={imgSrc}
						alt={imgAlt}
						width={240}
						height={240}
						className="block w-40 h-40"
					/>
					<div className={`${bree_serif.className} text-center sm:text-start`}>
						<p className="text-2xl font-semibold mb-2 text-emerald-500">
							{projType}
						</p>
						<h1 className="text-4xl mb-2 font-semibold text-neutral-50">
							{projTitle}
						</h1>{" "}
						<Link
							target="_blank"
							href={projLink}
							className={`${inter.className} mx-auto sm:mx-0 bg-slate-950 hover:text-emerald-500 active:text-emerald-600 py-1 px-2 block w-fit rounded`}
						>
							View Website
						</Link>
					</div>
				</div>
				<p className="text-lg mb-8">{projDesc}</p>
				<div className="px-4  pb-1 pt-4 bg-slate-800 my-8">
					{projDoc.map((par, index) => {
						return (
							<p
								className="mb-4"
								key={index}
							>
								{par}
							</p>
						);
					})}
				</div>
				<div className="mb-8">
					<h2
						className={`${bree_serif.className} text-lg mb-2 text-emerald-500`}
					>
						Learning Objective
					</h2>
					<ul>
						{projObjectives.map((item, index) => {
							return <li key={index}>- {item}</li>;
						})}
					</ul>
				</div>

				<ul className="flex flex-row gap-4 bg-slate-800 p-4">
					{projStack.map((item, index) => {
						const { imgSrc, imgAlt, techToolLink, techToolName } = item;
						return (
							<li key={index}>
								<Link
									target="_blank"
									title={techToolName}
									href={techToolLink}
								>
									<Image
										src={imgSrc}
										alt={imgAlt}
										width={120}
										height={120}
										className="block w-12 h-12 p-0.5 hover:bg-slate-500"
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}

export default ProjectPage;
