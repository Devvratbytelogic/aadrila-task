'use client'

import { contactFormValidationSchema } from "@/src/validation/validation";
import { Button } from "@heroui/react";
import { useFormik } from "formik";

const initialValues = {
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    inquiry_type: "",
    message: "",
}
export default function HomeContactForm() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: contactFormValidationSchema,
        onSubmit: (values) => {
            console.log(values);
            resetForm();
        },
    });

    return (
        <div className="bg-white p-4 lg:px-12 lg:py-20 common_box_shadow rounded-[20px]">
            <form className="form_wrapper" onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="two_column_form_field_wrapper">
                    <div className="form_input_field_wrapper">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="full_name"
                            value={values.full_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.full_name && errors.full_name && (
                            <p className="error_message">{errors.full_name}</p>
                        )}
                    </div>

                    <div className="form_input_field_wrapper">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && (
                            <p className="error_message">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="two_column_form_field_wrapper">
                    <div className="form_input_field_wrapper">
                        <input
                            type="text"
                            placeholder="Phone Number"
                            name="phone_number"
                            value={values.phone_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.phone_number && errors.phone_number && (
                            <p className="error_message">{errors.phone_number}</p>
                        )}
                    </div>

                    <div className="form_input_field_wrapper">
                        <input
                            type="text"
                            placeholder="Company Name"
                            name="company_name"
                            value={values.company_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.company_name && errors.company_name && (
                            <p className="error_message">{errors.company_name}</p>
                        )}
                    </div>
                </div>

                {/* Inquiry */}
                <div className="form_input_field_wrapper">
                    <input
                        type="text"
                        placeholder="Inquiry Type"
                        name="inquiry_type"
                        value={values.inquiry_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.inquiry_type && errors.inquiry_type && (
                        <p className="error_message">{errors.inquiry_type}</p>
                    )}
                </div>

                {/* Message */}
                <div className="form_input_field_wrapper">
                    <textarea
                        placeholder="Message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.message && errors.message && (
                        <p className="error_message">{errors.message}</p>
                    )}
                </div>

                {/* Submit */}
                <Button type="submit" className="btn_global rounded_btn bg_primary full_width font">Send Inquiry</Button>

            </form>
        </div>
    );
}
