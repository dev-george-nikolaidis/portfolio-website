import BackgroundImg from "../../../../assets/img/footer/footer.png";
import GithubIcon from "../../../../assets/img/footer/github.svg";
import LinkedinIcon from "../../../../assets/img/footer/linkedin.svg";
import s from "./Footer.module.scss";
type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className={`${s.footer} col-12`}>
			<img src={BackgroundImg} alt="" className={s.backgroundImg} />
			<div className={s.footerWrapper}>
				<div className={s.textContainer}>
					<span className={s.text}>
						2023 - <span className={s.nameText}>George Nikolaidis </span>
						.All rights reserved.
					</span>
				</div>
				<div className={s.socialsContainer}>
					<a href="https://github.com/dev-george-nikolaidis" target="_blank">
						<img src={GithubIcon} alt="" />
					</a>
					<a href="https://www.linkedin.com/in/dev-george-nikolaidis" target="_blank">
						<img src={LinkedinIcon} alt="" />
					</a>
				</div>
			</div>
		</footer>
	);
}
