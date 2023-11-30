import BackgroundHeroDark from "../../../../assets/img/hero/background-hero-dark.png";
import BackgroundHeroLight from "../../../../assets/img/hero/background-hero-light.png";
import ArrowSvg from "../../../../assets/img/hero/cta-arrow.svg";
import HeroDotsSvg from "../../../../assets/img/hero/hero-dots.svg";
import SelfImg from "../../../../assets/img/hero/hero-img.webp";
import lineSvg from "../../../../assets/img/hero/line.svg";
import ZikZakSvg from "../../../../assets/img/hero/zik-zak.svg";
import ButtonCta from "../../../../components/ButtonCTA/ButtonCTA";
import { useGeneralContext } from "../../../../context/GeneralContext";
import Navigation from "../Navigation/Navigation";
import s from "./Hero.module.scss";

type Props = {};

export default function Hero({}: Props) {
	const {
		state: { theme },
	} = useGeneralContext();
	const backgroundImg = theme === "Light" ? BackgroundHeroLight : BackgroundHeroDark;

	return (
		<div className={s.hero} id="home">
			<img src={backgroundImg} alt="" className={s.backgroundImg} />
			<div className={` ${s.heroWrapper} col-12`}>
				<Navigation />
				<div className={s.subContainer}>
					<div className={s.textContainer}>
						<h1 className={s.title}>
							<p className={s.greetingText}>Hello, I'm</p>
							George <span className={s.titleSpan}>Nikolaidis</span>
							<p className={s.profession}>A passionate Full Stack Web Developer</p>
						</h1>
						<a href="/#contact" className={s.link}>
							<ButtonCta className={s.ctaButton}>CONTACT ME</ButtonCta>
						</a>
						<img src={ArrowSvg} alt="" className={s.arrowIcon} />
						<img src={HeroDotsSvg} alt="" className={s.dotsIcon} />
						<img src={ZikZakSvg} alt="" className={s.zikZakIcon} />
						<img src={lineSvg} alt="" className={s.lineIcon} />
					</div>
					<div className={s.imgContainer}>
						<img src={SelfImg} alt="Full Stack Web Developer George Nikolaidis" className={s.heroImg} />
					</div>
				</div>
			</div>
		</div>
	);
}
