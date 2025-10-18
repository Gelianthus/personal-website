"use client";

import Image from "next/image";
import { useState } from "react";
import TechStackItem from "./TechStackItem";

function TechStackList() {
	const [expandedItem, setExpandedItem] = useState(0);

	return (
		<ul>
			<li>
				<div className="bg-slate-800 p-4 flex flex-col xs:flex-row gap-4 xs:items-center justify-between">
					<Image
						src={"/tech-stack-logos/js-logo.webp"}
						alt="JavaScript logo"
						width={140}
						height={140}
						className="block h-20 w-20 mx-auto xs:mx-0"
					/>
					<button
						onClick={() =>
							setExpandedItem((prevState) => {
								if (prevState === 1) {
									return 0;
								} else {
									return 1;
								}
							})
						}
						className={`${
							expandedItem === 1 ? "text-emerald-500" : "text-neutral-50"
						} text-center xs:text-end hover:text-emerald-500 active:text-emerald-600 font-bold`}
					>
						JavaScript{" "}
						{expandedItem === 1 ? (
							<span className={`material-symbols-outlined align-middle`}>
								expand_less
							</span>
						) : (
							<span className={`material-symbols-outlined align-middle`}>
								expand_more
							</span>
						)}
					</button>
				</div>
				<ul
					className={`${
						expandedItem === 1
							? "h-auto origin-top transition-all duration-150 ease-in visible opacity-100"
							: "h-0 origin-top transition-all duration-150 ease-in invisible opacity-0"
					} `}
				>
					<TechStackItem
						imgSrc={"/tech-stack-logos/react-logo.webp"}
						imgAlt={"react logo"}
						externalLink={"https://react.dev/"}
						title={"React"}
						desc={
							"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies."
						}
					/>
					<TechStackItem
						imgSrc={"/tech-stack-logos/nextjs-logo.webp"}
						imgAlt={"next.js logo"}
						externalLink={"https://nextjs.org/"}
						title={"Next.js"}
						desc={
							"Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation."
						}
					/>
				</ul>
			</li>

			<li>
				<div className="bg-slate-800 p-4 flex flex-col xs:flex-row gap-4 xs:items-center justify-between ">
					<Image
						src={"/tech-stack-logos/css-logo.webp"}
						alt="CSS logo"
						width={140}
						height={140}
						className="block h-20 w-20 mx-auto xs:mx-0"
					/>
					<button
						onClick={() =>
							setExpandedItem((prevState) => {
								if (prevState === 2) {
									return 0;
								} else {
									return 2;
								}
							})
						}
						className={`${
							expandedItem === 2 ? "text-emerald-500" : "text-neutral-50"
						} text-center xs:text-end hover:text-emerald-500 active:text-emerald-600 font-bold`}
					>
						Cascading Style Sheets{" "}
						{expandedItem === 2 ? (
							<span className={`material-symbols-outlined align-middle`}>
								expand_less
							</span>
						) : (
							<span className={`material-symbols-outlined align-middle`}>
								expand_more
							</span>
						)}
					</button>
				</div>
				<ul
					className={`${
						expandedItem === 2
							? "h-auto origin-top transition-all duration-150 ease-in visible opacity-100"
							: "h-0 origin-top transition-all duration-150 ease-in invisible opacity-0"
					}`}
				>
					<TechStackItem
						imgSrc={"/tech-stack-logos/tailwind-logo.webp"}
						imgAlt={"tailwindcss logo"}
						externalLink={"https://tailwindcss.com/"}
						title={"TailwindCSS"}
						desc={
							"Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables."
						}
					/>
				</ul>
			</li>

			<li>
				<div className="bg-slate-800 p-4 flex flex-col xs:flex-row gap-4 xs:items-center justify-between ">
					<Image
						src={"/tech-stack-logos/database-logo.webp"}
						alt="database logo"
						width={140}
						height={140}
						className="block h-20 w-20 mx-auto xs:mx-0"
					/>
					<button
						onClick={() =>
							setExpandedItem((prevState) => {
								if (prevState === 3) {
									return 0;
								} else {
									return 3;
								}
							})
						}
						className={`${
							expandedItem === 3 ? "text-emerald-500" : "text-neutral-50"
						} text-center xs:text-end hover:text-emerald-500 active:text-emerald-600 font-bold`}
					>
						Database{" "}
						{expandedItem === 3 ? (
							<span className={`material-symbols-outlined align-middle`}>
								expand_less
							</span>
						) : (
							<span className={`material-symbols-outlined align-middle`}>
								expand_more
							</span>
						)}
					</button>
				</div>
				<ul
					className={`${
						expandedItem === 3
							? "h-auto origin-top transition-all duration-150 ease-in visible opacity-100"
							: "h-0 origin-top transition-all duration-150 ease-in invisible opacity-0"
					}`}
				>
					<TechStackItem
						imgSrc={"/tech-stack-logos/mongodb-logo.webp"}
						imgAlt={"mongodb logo"}
						externalLink={"https://www.mongodb.com/"}
						title={"MongoDB"}
						desc={
							"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
						}
					/>
					<TechStackItem
						imgSrc={"/tech-stack-logos/mysql-logo.webp"}
						imgAlt={"mysql logo"}
						externalLink={"https://www.mysql.com/"}
						title={"MySQL"}
						desc={`MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language.`}
					/>
				</ul>
			</li>
			<li>
				<div className="bg-slate-800 p-4 flex flex-col xs:flex-row gap-4 xs:items-center justify-between ">
					<Image
						src={"/tech-stack-logos/odm-logo.webp"}
						alt="database odm logo"
						width={140}
						height={140}
						className="block h-20 w-20 mx-auto xs:mx-0"
					/>
					<button
						onClick={() =>
							setExpandedItem((prevState) => {
								if (prevState === 4) {
									return 0;
								} else {
									return 4;
								}
							})
						}
						className={`${
							expandedItem === 4 ? "text-emerald-500" : "text-neutral-50"
						} text-center xs:text-end hover:text-emerald-500 active:text-emerald-600 font-bold`}
					>
						Database ODM and ORM{" "}
						{expandedItem === 4 ? (
							<span className={`material-symbols-outlined align-middle`}>
								expand_less
							</span>
						) : (
							<span className={`material-symbols-outlined align-middle`}>
								expand_more
							</span>
						)}
					</button>
				</div>
				<ul
					className={`${
						expandedItem === 4
							? "h-auto origin-top transition-all duration-150 ease-in visible opacity-100"
							: "h-0 origin-top transition-all duration-150 ease-in invisible opacity-0"
					}`}
				>
					<TechStackItem
						imgSrc={"/tech-stack-logos/mongoose-logo.webp"}
						imgAlt={"mongoose logo"}
						externalLink={"https://mongoosejs.com/"}
						title={"Mongoose"}
						desc={
							"Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment."
						}
					/>
					<TechStackItem
						imgSrc={"/tech-stack-logos/prisma-logo.webp"}
						imgAlt={"prisma logo"}
						externalLink={"https://www.prisma.io/"}
						title={"Prisma"}
						desc={
							"Prisma is a next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB."
						}
					/>
				</ul>
			</li>
			<li>
				<div className="bg-slate-800 p-4 flex flex-col xs:flex-row gap-4 xs:items-center justify-between ">
					<Image
						src={"/tech-stack-logos/authentication.webp"}
						alt="authentication logo"
						width={140}
						height={140}
						className="block h-20 w-20 mx-auto xs:mx-0"
					/>
					<button
						onClick={() =>
							setExpandedItem((prevState) => {
								if (prevState === 5) {
									return 0;
								} else {
									return 5;
								}
							})
						}
						className={`${
							expandedItem === 5 ? "text-emerald-500" : "text-neutral-50"
						} text-center xs:text-end hover:text-emerald-500 active:text-emerald-600 font-bold`}
					>
						Authentication{" "}
						{expandedItem === 5 ? (
							<span className={`material-symbols-outlined align-middle`}>
								expand_less
							</span>
						) : (
							<span className={`material-symbols-outlined align-middle`}>
								expand_more
							</span>
						)}
					</button>
				</div>
				<ul
					className={`${
						expandedItem === 5
							? "h-auto origin-top transition-all duration-150 ease-in visible opacity-100"
							: "h-0 origin-top transition-all duration-150 ease-in invisible opacity-0"
					}`}
				>
					<TechStackItem
						imgSrc={"/tech-stack-logos/next-auth-logo.webp"}
						imgAlt={"next-auth logo"}
						externalLink={"https://next-auth.js.org/"}
						title={"NextAuth.js"}
						desc={
							"NextAuth.js is a complete open source authentication solution for Next.js applications. It is designed from the ground up to support Next.js and Serverless."
						}
					/>
				</ul>
			</li>
		</ul>
	);
}

export default TechStackList;
