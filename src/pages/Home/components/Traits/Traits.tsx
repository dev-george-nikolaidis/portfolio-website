import Curiosity from "../../../../assets/img/traits/curiosity.svg";
import DedicationIcon from "../../../../assets/img/traits/dedication.svg";
import DotsIcon from "../../../../assets/img/traits/dots.svg";
import LineIcon from "../../../../assets/img/traits/line.svg";
import LinesIcon from "../../../../assets/img/traits/lines.svg";
import PassionIcon from "../../../../assets/img/traits/passion.svg";
import s from "./Traits.module.scss";
type Props = {};

export default function Traits({}: Props) {
	return (
		<div className={`${s.traits} col-12`}>
			<div className={s.wrapper}>
				<img src={LineIcon} alt="" className={s.lineIcon} />
				<img src={DotsIcon} alt="" className={s.dotsIcon} />

				<h2 className={s.title}>Pursuing development through passion , dedication , and curiosity</h2>
				<div className={s.cardsContainer}>
					<div className={s.cardControl}>
						<img src={DedicationIcon} alt="" />
						<h4 className={s.cardTitle}> Dedication</h4>
						<p className={s.cardText}>
							Dedication is my unwavering commitment to mastering the craft. It's about consistently putting in the effort to enhance my skills, meet deadlines, and deliver top-notch web
							solutions. Determination is my ally in overcoming challenges.
						</p>
					</div>
					<div className={s.cardControl}>
						<img src={PassionIcon} alt="" />
						<h4 className={s.cardTitle}> Passion</h4>
						<p className={s.cardText}>
							Passion is at the core of my full-stack web development journey. It's more than coding, this enthusiasm turns challenges into opportunities for growth and creativity. I
							approach every project with joy.
						</p>
					</div>
					<div className={s.cardControl}>
						<img src={Curiosity} alt="" />
						<h4 className={s.cardTitle}> Curiosity</h4>
						<p className={s.cardText}>
							Curiosity is my constant companion, propelling me to explore emerging technologies and innovative solutions. It fosters a mindset of lifelong learning, ensuring that I stay
							ahead in the dynamic world of full-stack web development.
						</p>
					</div>
				</div>
				<img src={LinesIcon} alt="" className={s.linesIcon} />
			</div>
		</div>
	);
}
