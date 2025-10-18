import Image from "next/image";
import Link from "next/link";

function TechStackItem({ imgSrc, imgAlt, externalLink, title, desc }) {
	return (
		<li className="p-4 bg-slate-700 text-neutral-50 ">
			<div className="flex flex-col xs:flex-row gap-4 justify-between xs:items-center">
				<Image
					src={imgSrc}
					alt={imgAlt}
					width={140}
					height={140}
					className="block h-20 w-20 mx-auto xs:mx-0"
				/>
				<Link
					className="text-center underline xs:no-underline xs:text-end text-neutral-50 hover:text-emerald-500 active:text-emerald-600 font-bold"
					target="_blank"
					href={externalLink}
				>
					{title}{" "}
					<span className="material-symbols-outlined align-bottom">
						keyboard_double_arrow_right
					</span>
				</Link>
			</div>

			<p className=" mt-4 xs:mt-8">{desc}</p>
		</li>
	);
}

export default TechStackItem;
