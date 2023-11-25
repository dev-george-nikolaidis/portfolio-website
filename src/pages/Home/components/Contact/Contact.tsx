import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Lines from "../../../../assets/img/lines-contact.svg";
import ButtonCta from "../../../../components/ButtonCTA/ButtonCTA";
import { contactSchema, getRandomNumberBetween } from "../../../../util/helpers";
import s from "./Contact.module.scss";
type Props = {};

type contactSubmitForm = {
	name: string;
	subject: string;
	email: string;
	textarea: string;
};

export default function Contact({}: Props) {
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const [success, setSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<contactSubmitForm>({
		resolver: yupResolver(contactSchema),
	});
	const value1 = getRandomNumberBetween(1, 10);
	const value2 = getRandomNumberBetween(1, 8);
	const total = value1 + value2;

	const onSubmit = async (formData: contactSubmitForm) => {
		const promptPayload = window.prompt(`How much is ${value1} + ${value2}`);

		if (promptPayload === "" || promptPayload === null) {
			setIsBackendError(true);
			setErrorMessageBackend("Invalid answer");
			return;
		}

		if (Number(promptPayload) != total) {
			setIsBackendError(true);
			setErrorMessageBackend("Wrong answer,please try again.");
			return;
		}

		// todo
		// const payload = {
		// 	name: formData.name,
		// 	subject: formData.subject,
		// 	email: formData.email,
		// 	textarea: formData.textarea,
		// };
		try {
			const serviceId = "service_17audum";
			const templateId = "template_7irl36l";
			emailjs.init("jUyztPfSGbWSKSMuJ");
			console.log("sending");
			await emailjs.send(serviceId, templateId, {
				name: formData.name,
				recipient: formData.email,
				subject: formData.subject,
				textarea: formData.textarea,
				from_data: formData.email,
			});

			setSuccess(true);
			reset();
			setIsBackendError(false);
			setErrorMessageBackend("");
			setTimeout(() => {
				setSuccess(false);
			}, 8000);
		} catch (error) {
			console.log(error);
		}

		// setTimeout(() => {
		// 	setSuccess(true);
		// 	reset();
		// 	setIsBackendError(false);
		// 	setErrorMessageBackend("");
		// }, 2000);

		// setTimeout(() => {
		// 	setSuccess(false);
		// }, 8000);
	};

	return (
		<div className={s.contact} id="contact">
			<div className={s.formWrapper}>
				<div className={s.titleContainer}>
					<h2 className={s.title}>Get in touch</h2>
					<img src={Lines} alt="" />
				</div>
				{success && <span className={s.successMessage}>Your message was successfully delivered!</span>}
				<form action="#" className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={s.formControl}>
						<label htmlFor="Name" className={s.label}>
							Name*
						</label>
						<input type="text" {...register("name")} className={s.input} />
						{errors.name ? <span className={s.error}>{errors.name.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					</div>

					<div className={s.formControl}>
						<label htmlFor="Name" className={s.label}>
							Subject*
						</label>
						<input type="text" {...register("subject")} className={s.input} />
						{errors.subject ? <span className={s.error}>{errors.subject.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					</div>

					<div className={s.formControl}>
						<label htmlFor="Name" className={s.label}>
							Email*
						</label>
						<input type="email" {...register("email")} className={s.input} />
						{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					</div>

					<div className={s.formControl}>
						<label htmlFor="Message" className={s.textareaLabel}>
							Message*
						</label>
						<textarea {...register("textarea")} className={s.textarea} />
						{errors.textarea ? <span className={s.error}>{errors.textarea.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					</div>
					<ButtonCta className={s.btnForm}>Contact Me</ButtonCta>
				</form>
			</div>
		</div>
	);
}
