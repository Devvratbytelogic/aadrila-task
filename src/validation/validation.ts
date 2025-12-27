import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object({
    full_name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string()
        .matches(/^[0-9]{7,15}$/, "Invalid phone number")
        .required("Phone number is required"),
    company_name: Yup.string().required("Company name is required"),
    inquiry_type: Yup.string().required("Inquiry type is required"),
    message: Yup.string().min(10, "Minimum 10 characters").required("Message is required"),
});