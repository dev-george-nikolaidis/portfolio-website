import Api from "../../../../assets/img/services/api.svg";
import Circle from "../../../../assets/img/services/circle.svg";
import Custom from "../../../../assets/img/services/custom.svg";
import LineIcon from "../../../../assets/img/services/line.svg";
import WebDevelopmentIcon from "../../../../assets/img/services/web.svg";
import s from "./Services.module.scss";
type Props = {};

export default function Services({}: Props) {
	return (
		<div className={`${s.services} col-12`} id="services">
			<div className={s.wrapper}>
				<div className={s.titleContainer}>
					<h2 className={s.title}>Services</h2>
					<img src={LineIcon} alt="" className={s.line} />
				</div>

				<div className={s.servicesContainer}>
					<div className={s.service}>
						<img src={WebDevelopmentIcon} alt="" className={s.serviceIcon} />
						<h4 className={s.serviceTitle}>Website development</h4>
						<p className={s.serviceText}>
							I create responsive and visually appealing websites from scratch or enhance existing ones. I handle both the client-side (front-end) and server-side (back-end) development,
							ensuring a seamless user experience and optimal functionality.
						</p>
					</div>
					<div className={s.service}>
						<img src={Custom} alt="" className={s.serviceIcon} />
						<h4 className={s.serviceTitle}>Custom development </h4>
						<p className={s.serviceText}>
							I design and build custom web applications tailored to your specific needs. This includes developing the user interface, implementing business logic, setting up databases,
							and ensuring the application is scalable and secure.
						</p>
					</div>
					<div className={s.service}>
						<img src={Api} alt="" className={s.serviceIcon} />
						<h4 className={s.serviceTitle}>API Development </h4>
						<p className={s.serviceText}>
							I create Application Programming Interfaces (APIs) to enable communication between different software systems. Additionally, I integrate third-party APIs into web
							applications, allowing them to leverage external services, data, or functionalities.
						</p>
					</div>
				</div>
				<img src={Circle} alt="" className={s.circleIcon} />
			</div>
		</div>
	);
}
