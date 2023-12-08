import { Bree_Serif } from "next/font/google";
import TechStackList from "./TechStackList";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function TechStack() {
	return (
		<section
			className={`p-4 sm:p-16 min-h-screen bg-gradient-radial from-yellow-400 via-amber-400  to-amber-500 flex sm:grid flex-col sm:grid-cols-2 gap-8`}
			id="tech-stack"
		>
			<div>
				<h2
					className={`${bree_serif.className} text-neutral-800 text-4xl mt-4 sm:mt-0 mb-8 font-semibold`}
				>
					My Tech Stack
				</h2>
				<TechStackList />
			</div>
			<div>
				<h2
					className={`${bree_serif.className} text-neutral-800 text-4xl mb-8 font-semibold`}
				>
					FAQs regarding my Tech Stack:
				</h2>
				<div className="text-neutral-50">
					<p className="rounded-t-2xl p-4 bg-slate-800">
						Are you willing to learn this and that for a project?
					</p>
					<p className="rounded-b-2xl p-4 bg-slate-700 mb-4">
						I'm always looking for an opportunity to expand my arsenal. At the
						very least, I'll make sure to get the basics right if it's urgent.
					</p>
					<p className="rounded-t-2xl p-4 bg-slate-800">No TypeScript?</p>
					<p className="rounded-b-2xl p-4 bg-slate-700 mb-4">
						At the moment, I'm at the same stance as I was before I learned
						Tailwind. It looks overkill and unnecessary. Regardless, I am still
						willing to learn it if is part of the requirement or if it's for a
						long-term project.
					</p>
				</div>
			</div>
		</section>
	);
}

export default TechStack;
