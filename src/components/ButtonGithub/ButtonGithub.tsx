import GithubIcon from "../../assets/img/github.svg";
import s from "./ButtonGithub.module.scss";
type Props = {
	className?: string;
	isDisabled?: boolean;
};

export default function ButtonGithub({ className, isDisabled }: Props) {
	return (
		<button disabled={isDisabled} className={`${className} ${s.btnGithub}`}>
			<img src={GithubIcon} alt="" className={s.githubIcon} />
			<span className={s.btnText}>Explore Code</span>
		</button>
	);
}
