import { useState } from "react";
import LogoImg from "../../../../assets/img/logo.png";
import ThemeImg from "../../../../assets/img/theme.png";
import { ActionTypes } from "../../../../context/Actions";
import { useGeneralContext } from "../../../../context/GeneralContext";
import s from "./Navigation.module.scss";
type Props = {};

export default function Navigation({}: Props) {
	const [isToggled, setIsTogged] = useState(false);

	const {
		state: { theme },
		dispatch,
	} = useGeneralContext();
	const toggleTheme = () => {
		localStorage.setItem("theme", theme === "Light" ? "Dark" : "Light");
		dispatch({ type: ActionTypes.TOGGLE_THEME, payload: theme === "Light" ? "Dark" : "Light" });
	};

	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<li>
					<img src={LogoImg} alt="logo" className={s.logo} />
				</li>
				<ul className={s.list}>
					<li>
						<span className={`${s.link} ${s.linkHome}`}>Home</span>
					</li>
					<li>
						<a href="/#about" className={s.link}>
							About
						</a>
					</li>
					<li>
						<a href="/#skills" className={s.link}>
							Skills
						</a>
					</li>
					<li>
						<a href="/#portfolio" className={s.link}>
							Portfolio
						</a>
					</li>
					<li>
						<a href="/#services" className={s.link}>
							Services
						</a>
					</li>
					<li>
						<a href="/#contact" className={s.link}>
							Contact
						</a>
					</li>
					<li className={s.themeContainer} onClick={toggleTheme}>
						<img src={ThemeImg} alt="theme icon to switch between color themes" className={s.themeIcon} />
						<span className={s.link}>{theme}</span>
					</li>
				</ul>
			</nav>

			<nav className={s.humbuggerNav}>
				<section className={s.topNav}>
					<div>
						<img src={LogoImg} alt="logo" className={s.logo} />
					</div>
					<li className={s.themeContainer} onClick={toggleTheme}>
						<img src={ThemeImg} alt="theme icon to switch between color themes" className={s.themeIcon} />
						<span className={s.link}>{theme}</span>
					</li>
					<input id={s.menuToggle} type="checkbox" checked={isToggled} />
					<label className={s.menuButtonContainer} htmlFor="menu-toggle" onClick={() => setIsTogged(!isToggled)}>
						<div className={s.menuButton}></div>
					</label>

					<ul className={s.menu}>
						<li>
							<a href="/#about" className={s.link}>
								About
							</a>
						</li>
						<li>
							<a href="/#skills" className={s.link}>
								Skills
							</a>
						</li>
						<li>
							<a href="/#portfolio" className={s.link}>
								Portfolio
							</a>
						</li>
						<li>
							<a href="/#services" className={s.link}>
								Services
							</a>
						</li>
						<li>
							<a href="/#contact" className={s.link}>
								Contact
							</a>
						</li>
					</ul>
				</section>
			</nav>
		</header>
	);
}
