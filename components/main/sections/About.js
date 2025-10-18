import Link from "next/link";
import Image from "next/image";
import { Bree_Serif } from "next/font/google";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function About() {
	return (
		<section
			className="p-4 sm:p-16 min-h-screen bg-gradient-radial from-yellow-400 via-amber-400  to-amber-500"
			id="about-me"
		>
			{/* <div className="my-8"> */}
			<Image
				src={"/personal-website-images/sunflower2.webp"}
				alt="picture of a sunflower"
				width={240}
				height={240}
				className="block mt-4 sm:mt-0 align-middle mx-auto rounded-full aspect-square object-scale-down bg-slate-800 border-2 border-slate-950 mb-4"
			/>
			{/* <div
					className={`${bree_serif.className} text-4xl text-neutral-800 text-center`}
				>
					<p>Angelo Nathaniel P. Tandoc</p>
					<p>Philippines</p>
					<p>Male</p>
					<p>22 Years Old</p>
				</div> */}
			{/* </div> */}
			<div className="my-8">
				<h2
					className={`${bree_serif.className} text-neutral-900 text-4xl mb-4 font-semibold`}
				>
					Personal Information
				</h2>
				<ul className="mb-12">
					<li>
						<p className="text-lg text-neutral-800 mb-4 font-medium">
							Name: Angelo Nathaniel P. Tandoc
						</p>
					</li>
					<li>
						<p className="text-lg text-neutral-800 mb-4 font-medium">
							Address: Mangaldan, Pangasinan, 2432
						</p>
					</li>
					<li>
						<p className="text-lg text-neutral-800 mb-4 font-medium">
							Mobile Number: 09776970691
						</p>
					</li>
					<li>
						<p className="text-lg text-neutral-800 mb-4 font-medium">
							Email Address: tandoc.angelonathaniel.p@gmail.com
						</p>
					</li>
				</ul>

				<div className="bg-slate-800 rounded-2xl overflow-hidden">
					<h2
						className={`${bree_serif.className} text-lg font-bold p-4 bg-slate-900 text-emerald-500 text-center mb-4`}
					>
						Educational Attainment
					</h2>
					<ol className="text-neutral-50 p-4">
						<li className="mb-4">
							<p className="font-semibold">Santo Tomas Catholic School</p>
							<p>Senior High School, 2017 - 2019</p>
							<p>Graduated</p>
						</li>

						<li className="mb-4">
							<p className="font-semibold">Lyceum-Northwestern University</p>
							<p>
								Bachelor of Science in Information and Technology, 2024 -
								Present
							</p>
							<p>Undergraduate</p>
						</li>
					</ol>
				</div>
			</div>

			<div className="my-8 flex flex-col sm:grid sm:grid-cols-2 gap-4 text-neutral-50">
				<div className="bg-slate-800 rounded-2xl overflow-hidden">
					<h2
						className={`${bree_serif.className} text-lg font-bold p-4 bg-slate-900 text-emerald-500 text-center mb-4`}
					>
						Strengths
					</h2>
					<ul className="flex flex-col gap-8 p-4">
						<li>
							<h3 className="font-bold mb-2">Availability</h3>
							<p className="mb-2">
								I like to make sure that people who I am working with can easily
								get a hold of me.
							</p>
						</li>
						<li>
							<h3 className="font-bold mb-2">Easy to communicate with</h3>
							<p className="mb-2">
								I put an extra effort to make sure there are no misunderstanding
								between me and the team. I'm also very outspoken when deemed
								necessary.
							</p>
						</li>
						<li>
							<h3 className="font-bold mb-2">Highly Adaptive</h3>
							<p className="mb-2">
								Consistently able to make crucial decisions when put in a tight
								spot. I'm also able to hastily construct a new plan whenever
								something unexpectedly goes wrong with Plan A.
							</p>
						</li>
					</ul>
				</div>
				<div className="bg-slate-800 rounded-2xl overflow-hidden">
					<h2
						className={`${bree_serif.className} text-lg font-bold p-4 bg-slate-900 text-emerald-500 text-center mb-4`}
					>
						Weaknesses
					</h2>
					<ul className="flex flex-col  gap-8 p-4">
						<li>
							<h3 className="font-bold mb-2">Weak artistic sense</h3>
							<p className="mb-2">
								Too reliant on references when it comes to frontend building.
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<h2
					className={`${bree_serif.className} text-center font-bold text-2xl`}
				>
					Looking to connect? Reach out to my Social Accounts.
				</h2>
				<div className="flex flex-row gap-4 justify-center items-center p-4">
					<Link
						className="p-2 hover:bg-amber-300 active:bg-yellow-400 rounded"
						target="_blank"
						href={"https://github.com/Gelianthus"}
						title="Github profile"
					>
						<i className="devicon-github-original text-4xl aspect-square"></i>
					</Link>
					<Link
						className="p-2 hover:bg-amber-300 active:bg-yellow-400 rounded"
						target="_blank"
						href={
							"https://www.linkedin.com/in/angelo-nathaniel-tandoc-320984261/"
						}
						title="LinkedIn profile"
					>
						<i className="devicon-linkedin-plain text-4xl aspect-square"></i>
					</Link>
					<Link
						className="p-2 hover:bg-amber-300 active:bg-yellow-400 rounded"
						target="_blank"
						href={"https://www.facebook.com/profile.php?id=61550232111521"}
						title="Facebook profile"
					>
						<i className="devicon-facebook-plain text-4xl aspect-square"></i>
					</Link>
					<Link
						className="p-2 hover:bg-amber-300 active:bg-yellow-400 rounded"
						target="_blank"
						href={"https://twitter.com/gelianthus"}
						title="Twitter profile"
					>
						<i className="devicon-twitter-original text-4xl aspect-square"></i>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default About;
