import DotsIcon from "../../../../assets/img/about/dots.svg";
import ZikZakIcon from "../../../../assets/img/about/zik-zak-about.svg";
import ButtonCta from "../../../../components/ButtonCTA/ButtonCTA";
import s from "./About.module.scss";
type Props = {};

export default function About({}: Props) {
	return (
		<div className={`${s.about} col-12`} id="about">
			<img src={DotsIcon} alt="" className={s.dotsIcon} />
			<img src={ZikZakIcon} alt="" className={s.zikZakIcon} />
			<div className={s.aboutWrapper}>
				<h2 className={s.title}>About Me</h2>
				<p className={s.text}>
					I'm fascinated by technology, with a special love for web development. As a naturally curious individual, I find joy in the process of learning and am dedicated to daily
					improvement. I bring more than just a love for coding. If you're seeking a motivated individual with a genuine enthusiasm for growth, let's connect. I'm ready to bring my
					skills, dedication, and a proactive approach to your team. Let's build something great together.
				</p>
				<a href="/#contact" className={s.link}>
					<ButtonCta>Contact me</ButtonCta>
				</a>
			</div>
		</div>
	);
}
