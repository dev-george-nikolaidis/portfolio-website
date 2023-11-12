import s from "./ButtonCTA.module.scss";

type Props = {
	children: React.ReactNode;
	className?: string;
	isDisabled?: boolean;
};

export default function ButtonCta({ children, className, isDisabled }: Props) {
	return (
		<button disabled={isDisabled} className={`${className} ${s.btn}`}>
			{children}
		</button>
	);
}
