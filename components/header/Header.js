import HeaderNav from "./HeaderNav";
import MobileHeaderNav from "./MobileHeaderNav";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="sticky top-0 p-4 sm:pl-16 sm:pt-12 sm:pb-4 z-50 bg-slate-950 flex flex-row justify-between items-center gap-4">
			<Link
				href={"/"}
				className="w-fit aspect-square"
			>
				<Image
					src={"/personal-website-images/logo.webp"}
					alt="Gelianthus logo"
					width={280}
					height={280}
					className="block w-6 h-6 sm:h-12 sm:w-12 rounded-full"
				/>
			</Link>
			<HeaderNav />
			<MobileHeaderNav />
		</header>
	);
}

export default Header;
