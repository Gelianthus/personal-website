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
					How it began
				</h2>
				<p className="text-lg text-neutral-800 mb-8 font-medium">
					A proper introduction this time. Hello again, my name is Angelo
					Nathaniel P. Tandoc. I'm from the Philippines and has been alive for
					22 years. Ever since I got introduced into gaming and computers, it
					became more apparent to me what path I wanted to follow as I grew
					older. Unfortunately, my parents didn't really approve of what I had
					in mind. I tried different career paths which made me extremely
					unhappy. One thing lead to another and I ended up dropping out of
					college.
				</p>
				<div className="bg-slate-800 rounded-2xl overflow-hidden">
					<h2
						className={`${bree_serif.className} text-lg font-bold p-4 bg-slate-900 text-emerald-500 text-center mb-4`}
					>
						Education Attainment
					</h2>
					<ol className="text-neutral-50 p-4">
						<li className="mb-4">
							<p className="font-semibold">Santo Tomas Catholic School</p>
							<p>High School, 2013 - 2017</p>
						</li>
						<li className="mb-4">
							<p className="font-semibold">Santo Tomas Catholic School</p>
							<p>Senior High School, 2017 - 2019</p>
						</li>
						<li className="mb-4">
							<p className="font-semibold">PHINMA-University of Pangasinsan</p>
							<p>Bachelor of Science in Nursing, 2019 - Unfinished</p>
						</li>
						<li className="mb-4">
							<p className="font-semibold">Lyceum-Northwestern University</p>
							<p>
								Bachelor of Secondary Education Major in English, 2021 -
								Unfinished
							</p>
						</li>
					</ol>
				</div>
			</div>
			<div className="my-8">
				<p className="text-lg text-neutral-800 mb-8 font-medium">
					After deciding to halt my pursue in education, I bought a laptop and
					taught myself how to code. I originally planned to become a game
					developer but not knowing anything about programming, I didn't
					realized that I was teaching myself web development. I figured that
					since I've already put the time to learn it that I might as well see
					it through. And so far, I'm really happy with the decision to do so.
				</p>
				<h2
					className={`${bree_serif.className} text-neutral-900 text-4xl mb-4 font-semibold`}
				>
					My biggest obstacle yet
				</h2>
				<p className="text-lg text-neutral-800 mb-8 font-medium">
					It's been almost 2 years since then and I finally feel confident
					enough involve myself in a professional setting. Throughout my
					learning progress, I've only done freelancing work using WordPress
					until a student reached out to me. It was the first time that I got
					hired for a project that felt like an actual web development project,
					different from the usual landing page and personal website projects. I
					was asked to create an application similar to Facebook. It was already
					hard enough of a task to clone Facebook, but they also laid out a tech
					stack requirement for it which made it incredibly difficult
					considering the timeframe that I was given. Since I couldn't really
					decline the offer, I had no choice but to expand my tech stack while
					working on the project. In the end, the client passed his subject and
					was fully satisfied with the result. It took an extra amount of
					effort, but the payout at the end, excluding the monetary gain, made
					it really worth the effort. The hardships introduced me to a lot of
					new concepts, I got to learn new techniques, I saw things from a
					different perspective, and most importantly, I was able to recognize
					my strengths and weaknesses.
				</p>
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
								When being a part of something, I like to make sure that
								everyone involve can easily get a hold of me.
							</p>
						</li>
						<li>
							<h3 className="font-bold mb-2">Easy to communicate with</h3>
							<p className="mb-2">
								I put an extra effort to make sure there are no misunderstanding
								between me and the other side of the conversation. I'm also very
								outspoken when it comes to potential issues that could deter the
								project's progression.
							</p>
						</li>
						<li>
							<h3 className="font-bold mb-2">Highly Adaptive</h3>
							<p className="mb-2">
								Consistently able to make crucial decisions when put in a tight
								spot. I'm also able to hastily construct a new plan whenever
								something unexpectedly goes wrong with the original plan.
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
							<h3 className="font-bold mb-2">
								Jumped into frameworks prematurely
							</h3>
							<p className="mb-2">
								Have not memorize fundamentals which results in having to
								occasionally remind myself how certain things work by looking it
								up or referring to previous projects.
							</p>
						</li>
						<li>
							<h3 className="font-bold mb-2">Weak artistic sense</h3>
							<p className="mb-2">
								Can only come up with generic web designs. Too reliant on
								references when it comes to frontend building.
							</p>
						</li>
						<li>
							<h3 className="font-bold mb-2">Too lax</h3>
							<p className="mb-2">
								Can be too idle at times regardless of how difficult the task at
								hand is. I've been conditioned to perform at the very last
								moment.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="my-8">
				<h2
					className={`${bree_serif.className} text-neutral-900 text-4xl mb-4 font-semibold`}
				>
					Spark of motivation
				</h2>
				<p className="text-lg text-neutral-800 mb-8 font-medium">
					After seeing my hardwork come into fruition, I was filled with
					confidence but at the same time, I couldn't help but feel
					dissatisfied. Yes, it ended up as a success, but I know I could have
					done a better job at it. Whenever I revisit the project, all I see is
					improvements that could be made. Right now, I'm really eager to
					challenge myself even more. This time, I would like to be on the
					offensive end and start looking for opportunities.
				</p>
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
