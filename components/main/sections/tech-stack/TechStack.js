import { Bree_Serif } from "next/font/google";
import TechStackList from "./TechStackList";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function TechStack() {
	return (
		<section
			className={`p-4 sm:p-16 min-h-screen bg-gradient-radial from-yellow-400 via-amber-400  to-amber-500 flex `}
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
		</section>
	);
}

export default TechStack;
