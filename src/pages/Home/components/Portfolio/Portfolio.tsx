import JoyfulCoachingImg from "../../../../assets/img/portfolio/joyful coaching.webp";
import lineImg from "../../../../assets/img/portfolio/line.svg";
import PayapiImg from "../../../../assets/img/portfolio/paypai.webp";
import Photosnap from "../../../../assets/img/portfolio/photosnap.webp";
import Space from "../../../../assets/img/portfolio/space.webp";
import StudioX from "../../../../assets/img/portfolio/studio-x.webp";
import ButtonCta from "../../../../components/ButtonCTA/ButtonCTA";
import ButtonGithub from "../../../../components/ButtonGithub/ButtonGithub";
import s from "./Portfolio.module.scss";
type Props = {};

export default function Portfolio({}: Props) {
	return (
		<div className={`${s.portfolio} col-12`} id="portfolio">
			<div className={s.portfolioWrapper}>
				<div className={s.titleContainer}>
					<h2 className={s.title}>Portfolio</h2>
					<img src={lineImg} alt="" className={s.line} />
				</div>
				<div className={s.projectsContainer}>
					{/* Project 1 start */}
					<div className={s.projectControl}>
						<div className={s.imageControl}>
							<img src={JoyfulCoachingImg} alt="" className={s.projectImg} />
						</div>
						<div className={s.textControl}>
							<h3 className={s.projectTile}>Joyful Coaching</h3>
							<p className={s.projectText}>
								Joyful Coaching is a modern full-stack website designed to provide comprehensive life coaching services. Natalia, our experienced life coach, is here to support you in your
								journey to a more joyful and fulfilled life.
							</p>
							<div className={s.buttonContainer}>
								<a href="https://joyful-coaching.netlify.app" target="_blank">
									<ButtonCta>Explore it</ButtonCta>
								</a>
								<a href="https://github.com/dev-george-nikolaidis/Joyful-Coaching" target="_blank">
									<ButtonGithub />
								</a>
							</div>
						</div>
					</div>
					{/* Project 1 ends */}
					{/* Project 2 start */}
					<div className={s.projectControl}>
						<div className={s.textControl}>
							<h3 className={s.projectTile}>Payapi</h3>
							<p className={s.projectText}>
								Embark on a seamless financial journey with PayAPI, a cutting-edge responsive payment website designed with a focus on user experience and modern interface aesthetics. Our
								UI/UX design ensures a smooth and intuitive navigation experience, making financial transactions a breeze for users on any device.
							</p>
							<div className={s.buttonContainer}>
								<a href="https://payapi-app.netlify.app" target="_blank">
									<ButtonCta>Explore it</ButtonCta>
								</a>
								<a href="https://github.com/dev-george-nikolaidis/payapi" target="_blank">
									<ButtonGithub />
								</a>
							</div>
						</div>
						<div className={s.imageControl}>
							<img src={PayapiImg} alt="" className={s.projectImg} />
						</div>
					</div>
					{/* Project 2 ends */}
					{/* Project 3 start */}
					<div className={s.projectControl}>
						<div className={s.imageControl}>
							<img src={Space} alt="" className={s.projectImg} />
						</div>
						<div className={s.textControl}>
							<h3 className={s.projectTile}>Space exploration</h3>
							<p className={s.projectText}>
								Embark on an awe-inspiring journey through the cosmos with "Space Exploration," a responsive website designed to bring the wonders of space to your fingertips. Immerse
								yourself in a visually stunning and user-friendly interface that makes learning about the universe an enchanting experience.
							</p>
							<div className={s.buttonContainer}>
								<a href="https://space-exploration-app.netlify.app/" target="_blank">
									<ButtonCta>Explore it</ButtonCta>
								</a>
								<a href="https://github.com/dev-george-nikolaidis/Space-Tourism" target="_blank">
									<ButtonGithub />
								</a>
							</div>
						</div>
					</div>
					{/* Project 3 ends */}
					{/* Project 4 start */}
					<div className={s.projectControl}>
						<div className={s.textControl}>
							<h3 className={s.projectTile}>Studio X</h3>
							<p className={s.projectText}>
								Welcome to Studio X, where the cosmos meets creative design. Studio X is a responsive portfolio website that showcases the visionary work of an architect agency, seamlessly
								blending architectural prowess with the boundless inspiration of the cosmos.
							</p>
							<div className={s.buttonContainer}>
								<a href="https://studio-x-portfolio.netlify.app/" target="_blank">
									<ButtonCta>Explore it</ButtonCta>
								</a>
								<a href="https://github.com/dev-george-nikolaidis/studio-x" target="_blank">
									<ButtonGithub />
								</a>
							</div>
						</div>
						<div className={s.imageControl}>
							<img src={StudioX} alt="" className={s.projectImg} />
						</div>
					</div>
					{/* Project 4 ends */}
					{/* Project 5 start */}
					<div className={s.projectControl}>
						<div className={s.imageControl}>
							<img src={Photosnap} alt="" className={s.projectImg} />
						</div>
						<div className={s.textControl}>
							<h3 className={s.projectTile}>Photosnap</h3>
							<p className={s.projectText}>
								Step into the captivating world of visual storytelling with Photosnap, a responsive photography portfolio that goes beyond showcasing images—it's an immersive journey
								through moments frozen in time.
							</p>
							<div className={s.buttonContainer}>
								<a href="https://photosnap-pro.netlify.app" target="_blank">
									<ButtonCta>Explore it</ButtonCta>
								</a>
								<a href="https://github.com/dev-george-nikolaidis/photosnap" target="_blank">
									<ButtonGithub />
								</a>
							</div>
						</div>
					</div>
					{/* Project 5 ends */}
				</div>
			</div>
		</div>
	);
}
