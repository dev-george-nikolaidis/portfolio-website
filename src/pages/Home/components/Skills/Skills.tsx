import DockerIcon from "../../../../assets/img/skills/docker.svg";
import ExpressIcon from "../../../../assets/img/skills/express.svg";
import FigmaIcon from "../../../../assets/img/skills/figma.svg";
import GitIcon from "../../../../assets/img/skills/git.svg";
import JavascriptIcon from "../../../../assets/img/skills/javascript.svg";
import LaravelIcon from "../../../../assets/img/skills/laravel.svg";
import LineIcon from "../../../../assets/img/skills/line.svg";
import MysqlIcon from "../../../../assets/img/skills/mysql.svg";
import NodeIcon from "../../../../assets/img/skills/node.svg";
import PHPIcon from "../../../../assets/img/skills/php1.png";
import ReactIcon from "../../../../assets/img/skills/react.svg";
import SQLIcon from "../../../../assets/img/skills/sql.svg";
import TypescriptIcon from "../../../../assets/img/skills/typescript.svg";
import ZikZakIcon from "../../../../assets/img/skills/zik-zak-skills.svg";

import s from "./Skills.module.scss";
type Props = {};

export default function Skills({}: Props) {
	return (
		<div className={`${s.skills} col-12`} id="skills">
			<div className={s.wrapper}>
				<img src={LineIcon} alt="" className={s.lineIcon} />
				<img src={ZikZakIcon} alt="" className={s.ZikZakIcon} />
				<h2 className={s.title}>Current tech arsenal stack</h2>
				<div className={s.skillsContainer}>
					<div className={s.skillControl}>
						<img src={JavascriptIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Javascript</p>
					</div>
					<div className={s.skillControl}>
						<img src={TypescriptIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Typescript</p>
					</div>
					<div className={s.skillControl}>
						<img src={ReactIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>React</p>
					</div>
					<div className={s.skillControl}>
						<img src={NodeIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Node.js</p>
					</div>
					<div className={s.skillControl}>
						<img src={ExpressIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Express.js</p>
					</div>
					<div className={s.skillControl}>
						<img src={DockerIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Docker</p>
					</div>
					{/* <div className={s.skillControl}>
						<img src={SassIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Sass/Scss</p>
					</div> */}
					<div className={s.skillControl}>
						<img src={PHPIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>PHP</p>
					</div>
					<div className={s.skillControl}>
						<img src={LaravelIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Laravel</p>
					</div>
					<div className={s.skillControl}>
						<img src={MysqlIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Mysql</p>
					</div>
					{/* <div className={s.skillControl}>
						<img src={PostgressIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>PostgresSQL</p>
					</div> */}
					<div className={s.skillControl}>
						<img src={SQLIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>SQL</p>
					</div>
					<div className={s.skillControl}>
						<img src={FigmaIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Figma</p>
					</div>
					<div className={s.skillControl}>
						<img src={GitIcon} alt="" className={s.skillIcon} />
						<p className={s.skillText}>Git</p>
					</div>
				</div>
			</div>
		</div>
	);
}
