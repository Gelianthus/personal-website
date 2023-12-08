import Link from "next/link";
import Image from "next/image";

function ProjectCard({
	projId,
	projTitle,
	projType,
	projDesc,
	projLink,
	projStack,
	projectImg,
}) {
	const { imgSrc, imgAlt } = projectImg;
	return (
		<li className="p-4 bg-slate-900 text-neutral-50 flex-grow flex flex-col gap-4 justify-between">
			<div className="flex flex-col xs:flex-row gap-4 items-center">
				<Image
					src={imgSrc}
					alt={imgAlt}
					width={120}
					height={120}
					className="w-12 h-12 block"
				/>
				<div>
					<p className="text-emerald-500 text-sm break-all">{projType}</p>
					<h2 className="text-xl font-semibold break-all">{projTitle}</h2>
				</div>
			</div>

			<p className="">
				{projDesc.length > 100 ? projDesc.slice(0, 100) + "..." : projDesc}
			</p>
			<ul className="flex flex-row gap-4 bg-slate-800 p-2">
				{projStack.map((item, index) => {
					const { imgSrc, imgAlt, techToolLink, techToolName } = item;
					return (
						<li
							key={index}
							className="h-8"
						>
							<Link
								target="_blank"
								href={techToolLink}
							>
								<Image
									title={techToolName}
									src={imgSrc}
									alt={imgAlt}
									width={120}
									height={120}
									className="block w-8 h-8 hover:bg-slate-500 p-0.5"
								/>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="flex flex-col text-center xs:text-start xs:flex-row gap-4 justify-end">
				<Link
					className="py-2 px-4 rounded text-sm bg-slate-950 hover:text-emerald-500 active:text-emerald-600"
					href={`/projects/${projId}`}
				>
					Read More
				</Link>
				<Link
					className="py-2 px-4 rounded text-sm bg-slate-950 hover:text-emerald-500 active:text-emerald-600"
					href={projLink}
					target="_blank"
				>
					View Website
				</Link>
			</div>
		</li>
	);
}

export default ProjectCard;
