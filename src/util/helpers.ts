import * as yup from "yup";

export function getRandomNumberBetween(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
export const contactSchema = yup.object().shape({
	name: yup.string().min(2, "Name must be at list 2 characters long.").required("Name is required"),
	subject: yup.string().min(2, "Subject must be at list 2 characters long.").required("Subject is required"),
	email: yup.string().email("Please enter a valid email address").min(2, "Email is required").required("Email is required"),
	textarea: yup.string().min(20, "Message must be at list 20 characters long.").required("Message is required"),
});
