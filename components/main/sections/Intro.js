import Image from "next/image";
import { Bree_Serif } from "next/font/google";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function Intro() {
	return (
		<section
			id="introduction"
			className="p-4 sm:p-16 text-neutral-50 bg-slate-800 relative isolate overflow-hidden"
		>
			<h1
				className={`${bree_serif.className} mt-8 xs:mt-0 text-center xs:text-start text-shadow shadow-black text-3xl xs:text-4xl font-bold w-full sm:w-1/2`}
			>
				Hi, my name is{" "}
				<span className="text-emerald-500">Angelo Nathaniel</span>,
			</h1>
			<p
				className={`${bree_serif.className} text-center xs:text-start text-shadow shadow-black text-2xl xs:text-3xl w-full sm:w-1/2`}
			>
				learning to become a full-stack Web Developer
			</p>
			<div className="w-full sm:w-1/2">
				<p className="my-8 text-shadow shadow-black">
					🤝 - Wanna work together? First, take your time to assess if I'm the
					right person for your project by getting to know me better.
				</p>
				<p className="my-8 text-shadow shadow-black">
					🛠 - I understand that some project requires certain tools, that's why
					I have listed my tech stack down for you to decide if I have what
					you're looking for.
				</p>
				<p className="my-8 text-shadow shadow-black">
					🧩 - Check out my previous projects in full detail too see if it
					passess your desired criteria.
				</p>
				<p className="my-8 text-shadow shadow-black">
					💪 - Get to know my strength and weaknesses. A very valuable
					information when building a team.
				</p>
			</div>
			<Image
				src={"/personal-website-images/sunflower.webp"}
				alt="a picture of a sunflower"
				height={420}
				width={420}
				className="absolute -z-10 -rotate-45 -right-36 xs:-right-40 sm:-right-48 -bottom-32 xs:-bottom-32 sm:-top-4 sm:bottom-0 block w-60 sm:w-96"
			/>
		</section>
	);
}

export default Intro;
