const projectObjects = [
	{
		projId: "if63y2DzpvHYr",
		projTitle: "Frontent Mentor | Advice Generator",
		projType: "Data Fetching Application",
		projDesc:
			"This is a Frontend Mentor challenge for beginners. An Advice Generator App that will randomly generate a quote on demand. The quote is taken from an API provided by the challenge.",
		projDoc: [
			"This application is built with vite as a frontend tool and written in react, which may have been an overkill considering how simple it is.",
			"It initially fetches and displays a random quote when the application loads. The user can then request a new quote by clicking on a button. All fetches are done with the help of axios, which is a promise-based HTTP Client for node.js and the browser.",
		],
		projObjectives: ["Learn to retrieve and use data from an API."],
		projLink: "https://gelianthus.github.io/advice-generator/",
		projStack: [
			{
				imgSrc: "/tech-stack-logos/react-logo.webp",
				imgAlt: "React logo",
				techToolLink: "https://react.dev/",
				techToolName: "React",
			},
			{
				imgSrc: "/tech-stack-logos/css-logo.webp",
				imgAlt: "CSS logo",
				techToolLink: "https://en.wikipedia.org/wiki/CSS",
				techToolName: "CSS",
			},
		],
		projectImg: {
			imgSrc: "/personal-website-images/frontend-mentor-logo.webp",
			imgAlt: "Frontend mentor logo",
		},
	},
	{
		projId: "nmzI8KI70TedA",
		projTitle: "Frontend Mentor | RPS Master",
		projType: "Frontend Application",
		projDesc:
			"An advanced Frontend Mentor challenge. A simple Rock-Paper-Scissors game against computer. It challenges ones ability to write logics and build a semi-complex frontend layout.",
		projDoc: [
			"One of the first projects I've done in react. Back then, building a multi-page application is a lot of work for me. This lead me to often find ways to avoid creating multiple pages by using optional-rendering. The hardest part of this frontend mentor challenge is to allow user to swtich between different game modes of Rock-Paper-Scissors which I avoided by rendering a different component based on a defined state.",
		],
		projObjectives: [
			"Learn about basic cookie usage.",
			"Learn about react state management.",
		],
		projLink: "https://gelianthus.github.io/rps-master/",
		projStack: [
			{
				imgSrc: "/tech-stack-logos/react-logo.webp",
				imgAlt: "React logo",
				techToolLink: "https://react.dev/",
				techToolName: "React",
			},
			{
				imgSrc: "/tech-stack-logos/css-logo.webp",
				imgAlt: "CSS logo",
				techToolLink: "https://en.wikipedia.org/wiki/CSS",
				techToolName: "CSS",
			},
		],
		projectImg: {
			imgSrc: "/personal-website-images/frontend-mentor-logo.webp",
			imgAlt: "Frontend mentor logo",
		},
	},
	{
		projId: "CnI6MZGizu8Qk",
		projTitle: "Frontend Mentor | Rest Countries API",
		projType: "Frontend Application / Data Fetching Application",
		projDesc:
			"This is a solution to the REST Countries API challenge on Frontend Mentor. It allows user to get information about every country in the world. The challenge heavily focuses on frontend interactions such as color theme switching and filtering content.",
		projDoc: [
			"This project is supposedly a multi-page application. The application displays a card for every country taken from the REST Country API. The user may click on any card to display more information about the country, by redirecting the user a diffirent page. However, this was way out of my capabilities at that time. Instead, I used the html dialog to display an overlay that covered the entire view screen to replicate the effect of redirection.",
			"Some of the important functionalities of this application is the color theme switcher as required by the challenge, as well as diffirent kinds of filtering. The color theme switcher was done using the Context API. The filtering is done by creating a copy of the initial fetched country data which is then filtered by the user's search input. The user can also filter the countries by selecting a region to display to return all the countries that matches the selected region.",
			"The API itself was already outdated by the time of making this project. This gave me the opportunity to tackle error-handling. I used optional rendering to prevent errors, but only in the frontend. It was the best solution there is, mainly because, the fetched data is still used regardless of whether or not it has some missing or incorrect data.",
		],
		projObjectives: [
			"Learn to retrieve and use data from an API.",
			"Learn how to impliment a color theme switcher functionality.",
			"Learn how to impliment a search functionality.",
			"Basic error-handling",
		],
		projLink: "https://gelianthus.github.io/fm_rest-country-api/",
		projStack: [
			{
				imgSrc: "/tech-stack-logos/react-logo.webp",
				imgAlt: "React logo",
				techToolLink: "https://react.dev/",
				techToolName: "React",
			},
			{
				imgSrc: "/tech-stack-logos/css-logo.webp",
				imgAlt: "CSS logo",
				techToolLink: "https://en.wikipedia.org/wiki/CSS",
				techToolName: "CSS",
			},
		],
		projectImg: {
			imgSrc: "/personal-website-images/frontend-mentor-logo.webp",
			imgAlt: "Frontend mentor logo",
		},
	},
	{
		projId: "VBbG1kO0XmDPr",
		projTitle: "notPokédex",
		projType: "Data Fetching Application",
		projDesc:
			"An appilication that retrieves data from a RESTful API. The API provides information of pretty much anything about Pokémon games. The application itself only focuses on displaying the strength and weaknesses of a certain Pokémon against other Pokémon types.",
		projDoc: [
			"The creator of the API kindly asked anyone who plans on using the API to implement some kind of caching to limit API calls. Caching limits the amount of API calls as well as optimizing data fetching, making it a lot faster to retrieve data. Since the API is free, you can expect it to be slow at times which makes caching beneficial for both parties. I used a browser wrapper that has a built-in caching, the wrapper is provided by the API documentation and is recommended by the creator as well.",
		],
		projObjectives: [
			"Learn to retrieve and use data from an API.",
			"Limit the amount of API calls by caching data.",
		],
		projLink: "https://gelianthus.github.io/not-pokedex/",
		projStack: [
			{
				imgSrc: "/tech-stack-logos/react-logo.webp",
				imgAlt: "React logo",
				techToolLink: "https://react.dev/",
				techToolName: "React",
			},
			{
				imgSrc: "/tech-stack-logos/css-logo.webp",
				imgAlt: "CSS logo",
				techToolLink: "https://en.wikipedia.org/wiki/CSS",
				techToolName: "CSS",
			},
		],
		projectImg: {
			imgSrc: "/personal-website-images/poke-api-logo.webp",
			imgAlt: "PokéAPI logo",
		},
	},

	{
		projId: "ugY2SExvfHNRo",
		projTitle: "Music Recommendation - Taylor's Version",
		projType: "Frontend Application",
		projDesc:
			"A simple application that recommends a premade Spotify playlist to the user. The application will then open the Spotify app in order to open the playlist.",
		projDoc: [
			"This project is purely frontend, focused around a slider.",
			"It will ask the user to answer a short survey which will determine which playlist to recommend by saving the answer of the user and comparing the pattern that is made using the answer to an array that contains the playlist and its link. By clicking the link, the app will check if you have spotify installed and open the app if it does exist.",
		],
		projObjectives: [
			"Check if an application is installed to the user's machine.",
			"Open an application from the user's machine.",
		],
		projLink: "https://gelianthus.github.io/mrtv-react-app/",
		projStack: [
			{
				imgSrc: "/tech-stack-logos/react-logo.webp",
				imgAlt: "React logo",
				techToolLink: "https://react.dev/",
				techToolName: "React",
			},
			{
				imgSrc: "/tech-stack-logos/css-logo.webp",
				imgAlt: "CSS logo",
				techToolLink: "https://en.wikipedia.org/wiki/CSS",
				techToolName: "CSS",
			},
		],
		projectImg: {
			imgSrc: "/personal-website-images/taylorbanner.webp",
			imgAlt: "an image of Taylor Swift",
		},
	},
];

export default projectObjects;

// project object structure

// {
// 	projId: 5,
// 	projTitle: "notPokedex",
// 	projType: "Frontend Application / Data Fetching Application",
// 	projDesc:
// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet lectus, quis pulvinar nulla. Aliquam facilisis lorem orci, eget viverra enim dictum et. Cras maximus, purus sit amet bibendum tincidunt, est nisl lobortis nisl, eu auctor sem diam id turpis. Donec sollicitudin accumsan augue, et sagittis sem rhoncus placerat. Curabitur placerat malesuada augue, in rutrum sapien sollicitudin at. Aenean vel luctus nibh. Aliquam suscipit sapien sit amet ligula tristique viverra. Etiam ultricies purus in orci aliquet tincidunt. Cras in nunc vel dolor rhoncus lobortis. Maecenas mattis maximus enim lobortis scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc molestie, nisi in vestibulum pharetra, dolor nisi porttitor lectus, non lobortis metus purus ac sem. Maecenas commodo nibh neque, quis porttitor massa elementum ac. Maecenas vestibulum magna imperdiet sollicitudin feugiat. Fusce tortor est, pellentesque vel imperdiet quis, euismod at nibh. Quisque sed ante in erat auctor efficitur. Etiam nec magna vitae risus posuere condimentum vitae vitae lorem.",
// 	projDoc: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet lectus, quis pulvinar nulla. Aliquam facilisis lorem orci, eget viverra enim dictum et. Cras maximus, purus sit amet bibendum tincidunt, est nisl lobortis nisl, eu auctor sem diam id turpis."],
// projObjectives: [
// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet lectus, quis pulvinar nulla. Aliquam facilisis lorem orci, eget viverra enim dictum et. Cras maximus, purus sit amet bibendum tincidunt, est nisl lobortis nisl, eu auctor sem diam id turpis.",
// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et laoreet lectus, quis pulvinar nulla. Aliquam facilisis lorem orci, eget viverra enim dictum et. Cras maximus, purus sit amet bibendum tincidunt, est nisl lobortis nisl, eu auctor sem diam id turpis.",
// 	],
// 	projLink: "gelianthus.com",
// 	projStack: [{imgSrc: "", imgAlt: "", techToolLink: "", techToolName: "" }, {imgSrc: "", imgAlt: "", techToolLink: "", techToolName: "" }],
//  projectImg: { imgSrc: "", imgAlt: "" },
// },
