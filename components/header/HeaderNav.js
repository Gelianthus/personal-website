"use client";

import { useEffect, useState } from "react";
import { Bree_Serif } from "next/font/google";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function HeaderNav() {
	const sectionIds = [
		{ id: "introduction" },
		{ id: "tech-stack" },
		{ id: "projects" },
		{ id: "about-me" },
	];

	const highlightedText = "text-emerald-500";
	const nonHighlightedText = "text-neutral-50";

	const [highlighted, setHighlighted] = useState("");

	useEffect(() => {
		const intersectionHandle = (entries) => {
			entries.map((entry) => {
				if (entry.isIntersecting) {
					setHighlighted(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(intersectionHandle, {
			threshold: 0.8,
		});

		sectionIds.map((id) => {
			const target = document.getElementById(id.id);
			if (target) {
				observer.observe(target);
			}
		});

		return () => {
			sectionIds.map((id) => {
				const target = document.getElementById(id.id);
				if (target) {
					observer.unobserve(target);
				}
			});
		};
	}, []);

	// const scrollToBottom = () => {
	// 	window.scrollTo({
	// 		top: document.documentElement.scrollHeight,
	// 	});
	// };

	// const scrollToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 	});
	// };

	return (
		<nav className="overflow-hidden hidden sm:block">
			<ul className="flex flex-row justify-end">
				{/* <li>
					<button
						onClick={scrollToTop}
						title="scroll to top"
						className="block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-neutral-50 text-shadow-sm shadow-black"
					>
						<span className="material-symbols-outlined size-32 align-middle">
							arrow_upward_alt
						</span>
					</button>
				</li>
				<li>
					<button
						onClick={scrollToBottom}
						title="scroll to bottom"
						className="block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-neutral-50 text-shadow-sm shadow-black"
					>
						<span className="material-symbols-outlined size-32 align-middle">
							arrow_downward_alt
						</span>
					</button>
				</li> */}
				<li>
					<a
						className={`block py-4 px-2 hover:text-emerald-500 active:text-emerald-600 h-full  font-semibold text-lg ${
							bree_serif.className
						} text-shadow-sm shadow-black ${
							highlighted === "introduction"
								? highlightedText
								: nonHighlightedText
						}`}
						href={"#introduction"}
					>
						INTRO 🙋‍♂️
					</a>
				</li>
				<li>
					<a
						className={`block py-4 px-2 hover:text-emerald-500 active:text-emerald-600 h-full  font-semibold text-lg ${
							bree_serif.className
						} text-shadow-sm shadow-black ${
							highlighted === "tech-stack"
								? highlightedText
								: nonHighlightedText
						}`}
						href={"#tech-stack"}
					>
						TECH STACK 📚
					</a>
				</li>
				<li>
					<a
						className={`block py-4 px-2 hover:text-emerald-500 active:text-emerald-600 h-full  font-semibold text-lg ${
							bree_serif.className
						} text-shadow-sm shadow-black ${
							highlighted === "projects" ? highlightedText : nonHighlightedText
						}`}
						href={"#projects"}
					>
						PROJECTS 📁
					</a>
				</li>
				<li>
					<a
						className={`block py-4 px-2 hover:text-emerald-500 active:text-emerald-600 h-full  font-semibold text-lg ${
							bree_serif.className
						} text-shadow-sm shadow-black ${
							highlighted === "about-me" ? highlightedText : nonHighlightedText
						}`}
						href={"#about-me"}
					>
						ABOUT ME 🧑
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default HeaderNav;
