import Intro from "./sections/Intro";
import TechStack from "./sections/tech-stack/TechStack";
import Projects from "./sections/projects/Projects";
import About from "./sections/About";

function Main() {
	return (
		<main className="flex-grow">
			<Intro />
			<TechStack />
			<Projects />
			<About />
		</main>
	);
}

export default Main;
