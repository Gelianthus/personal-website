"use client";

import { useEffect, useState, useRef } from "react";
import { Bree_Serif } from "next/font/google";

const bree_serif = Bree_Serif({ weight: ["400"], subsets: ["latin"] });

function MobileHeaderNav() {
	// const sectionIds = [
	// 	{ id: "introduction" },
	// 	{ id: "tech-stack" },
	// 	{ id: "projects" },
	// 	{ id: "about-me" },

	// ];

	// const highlightedText = "text-emerald-500";
	// const nonHighlightedText = "text-neutral-50";

	// const [highlighted, setHighlighted] = useState("");
	const [expanded, setExpanded] = useState(false);
	const navContainerRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!navContainerRef.current.contains(event.target)) {
				setExpanded(false);
			}
		};

		if (expanded) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [expanded]);

	// useEffect(() => {
	// 	const intersectionHandle = (entries) => {
	// 		entries.map((entry) => {
	// 			if (entry.isIntersecting) {
	// 				setHighlighted(entry.target.id);
	// 			}
	// 		});
	// 	};

	// 	const observer = new IntersectionObserver(intersectionHandle, {
	// 		threshold: 0.8,
	// 	});

	// 	sectionIds.map((id) => {
	// 		const target = document.getElementById(id.id);
	// 		if (target) {
	// 			observer.observe(target);
	// 		}
	// 	});

	// 	return () => {
	// 		sectionIds.map((id) => {
	// 			const target = document.getElementById(id.id);
	// 			if (target) {
	// 				observer.unobserve(target);
	// 			}
	// 		});
	// 	};
	// }, []);

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
		<div
			ref={navContainerRef}
			className="sm:hidden relative w-fit flex flex-row justify-between"
		>
			<button
				className="block"
				onClick={() => setExpanded((prevState) => !prevState)}
			>
				<span className="material-symbols-outlined align-middle text-neutral-50 hover:text-emerald-500 active:text-emerald-600">
					menu
				</span>
			</button>

			<nav
				onMouseLeave={() => setExpanded(false)}
				className={`${
					expanded ? "block" : "hidden"
				} overflow-hidden absolute right-0 top-16 bg-slate-950 rounded w-48`}
			>
				<ul className="flex flex-col justify-end">
					{/* <li>
					<button
						onClick={scrollToTop}
						title="scroll to top"
						className="block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-endtext-neutral-50 text-shadow-sm shadow-black"
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
						className="block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-endtext-neutral-50 text-shadow-sm shadow-black"
					>
						<span className="material-symbols-outlined size-32 align-middle">
							arrow_downward_alt
						</span>
					</button>
				</li> */}
					<li>
						<a
							onClick={() => setExpanded(false)}
							className={`block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-end font-semibold text-lg ${bree_serif.className} text-neutral-50 hover:text-emerald-500 active:text-emerald-500  text-shadow-sm shadow-black`}
							href={"#introduction"}
						>
							INTRO 🙋‍♂️
						</a>
					</li>
					<li>
						<a
							onClick={() => setExpanded(false)}
							className={`block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-end font-semibold text-lg ${bree_serif.className} text-neutral-50 hover:text-emerald-500 active:text-emerald-500  text-shadow-sm shadow-black`}
							href={"#tech-stack"}
						>
							TECH STACK 📚
						</a>
					</li>
					<li>
						<a
							onClick={() => setExpanded(false)}
							className={`block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-end font-semibold text-lg ${bree_serif.className} text-neutral-50 hover:text-emerald-500 active:text-emerald-500  text-shadow-sm shadow-black `}
							href={"#projects"}
						>
							PROJECTS 📁
						</a>
					</li>
					<li>
						<a
							onClick={() => setExpanded(false)}
							className={`block p-4 hover:text-emerald-500 active:text-emerald-600 h-full text-end font-semibold text-lg ${bree_serif.className} text-neutral-50 hover:text-emerald-500 active:text-emerald-500  text-shadow-sm shadow-black `}
							href={"#about-me"}
						>
							ABOUT ME 🧑
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default MobileHeaderNav;
