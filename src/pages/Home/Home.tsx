import ArrowIcon from "../../assets/img/arrow-up.svg";
import { useGeneralContext } from "../../context/GeneralContext";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Traits from "./components/Traits/Traits";
import s from "./Home.module.scss";

type Props = {};

export default function Home({}: Props) {
	const {
		state: { theme },
	} = useGeneralContext();

	return (
		<section className={`col-12 ${s.home}`} data-theme={theme}>
			<Hero />
			<Traits />
			<About />
			<Skills />
			<Portfolio />
			<Services />
			<Contact />
			<Footer />
			<a href="/#home" className={s.link}>
				<img src={ArrowIcon} alt="" className={s.icon} />
			</a>
		</section>
	);
}
