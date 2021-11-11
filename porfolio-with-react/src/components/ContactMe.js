import React, { useRef, useState } from 'react'; 
import emailjs from 'emailjs-com'; 
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const ContactMe = () => {
    const form = useRef(); 
    const [successMessage, setSuccessMessage] = useState(""); 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_hyk6n5k";
    const templateID = "template_ID"; 
    const userID = "user_pgsfBmb52S3TnEa6FQy8N"; 

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID, 
            {
                name: data.name, 
                phone: data.phone, 
                email: data.email, 
                subject: data.subject,
                message: data.message
            },
            userID
        )
        r.target.reset(); 
    }; 

    const sendEmail = () => {
        emailjs.sendForm("service_hyk6n5k", "template_ID", form.current, "user_pgsfBmb52S3TnEa6FQy8N")
        .then(() => {
            setSuccessMessage("Yay! Your email was sent. I will contact you as soon as possible.");  
        }, (error) => {
            console.log("Error", error.text);
        });
    };

    return (
        <div id="contact" className="contact container">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="contact-text">
                    <h1 className="content-header">Contact Me</h1>
                    <p>Please fill out the form and I will respond as soon as possible.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input 
                            className="form-control" 
                            placeholder="Enter Your Name" 
                            name="name" 
                            type="text" 
                            id="name"
                            {...register("name", { required: "Please enter your name.", maxLength: 20})}
                        /> 
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            render={({ message }) => <p className="error-message">{message}</p>}
                        />
                        
                        <input 
                            className="form-control" 
                            placeholder="Enter Your Phone Number" 
                            name="phone" 
                            type="text" 
                            id="phone"
                            {...register("phone", { required: "Please enter a valid phone number."})}
                        /> 
                        <ErrorMessage
                            errors={errors}
                            name="phone"
                            render={({ message }) => <p className="error-message">{message}</p>}
                        /> 

                        <input 
                            className="form-control" 
                            placeholder="Enter Your Email" 
                            name="email" 
                            type="email" 
                            id="email"
                            {...register("email", { required: "Please enter a valid email address.", pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ })}
                        /> 
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className="error-message">{message}</p>}
                        /> 

                        <input 
                            className="form-control" 
                            placeholder="Subject" 
                            name="subject" 
                            type="text" 
                            id="subject"
                            {...register("subject", { required: "Please enter a subject for your message.", maxLength: 20})}
                        /> 
                        <ErrorMessage
                            errors={errors}
                            name="subject"
                            render={({ message }) => <p className="error-message">{message}</p>}
                        /> 

                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea 
                            className="form-control" 
                            placeholder="Enter Your Message" 
                            name="message" 
                            type="text" 
                            id="message"
                            {...register("message", { required: "Please enter a message." })}
                        ></textarea> 
                        <ErrorMessage
                            errors={errors}
                            name="message"
                            render={({ message }) => <p className="error-message">{message}</p>}
                        /> 
                        <button className=" btn btn-light contact-btn" type="submit" value="Send">Send</button>
                    </div>
                    <span className="success-message">{successMessage}</span>
                </div>
            </form>
        </div>
    )
}

export default ContactMe
