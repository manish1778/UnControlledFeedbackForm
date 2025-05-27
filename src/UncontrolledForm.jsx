import React from "react";
import { FaFacebook, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import "./Form.css"

const UncontrolledForm = () => {

    const [formErrors, setFormErrors] = React.useState({});

       const usernameRef=React.useRef(null);
       const emailRef=React.useRef(null);
       const passwordRef=React.useRef(null);
       const setpasswordRef=React.useRef(null);
   

    function handleSubmit(e) {
        e.preventDefault();

        let formValues = {
            username: usernameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
            password: passwordRef.current.value,
            setpassword: setpasswordRef.current.value,
        };
        
        const errors = validateForm(formValues);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            alert("Form is submitted successfully");
            console.log(formValues);

            // Reset form values manually for uncontrolled inputs
            usernameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            setpasswordRef.current.value = "";
        }
            
    }

    function validateForm(values) {
        const errors = {};
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Email is not a valid format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        if (!values.setpassword) {
            errors.setpassword = "Confirm password is required!";
        }else if(values.password!==values.setpassword){
            errors.setpassword = "Password is not matching.Please enter again!";
        }
        return errors;
    }


    return (
        <div className="container">
            <h2>Please Fill out form to Register!</h2>
            <form onSubmit={handleSubmit} >
                <label className="label">Full name:</label>
                <input
                    type="text"
                    name="username"
                    ref={usernameRef}                 
                />
                {formErrors.username && <p className="error">{formErrors.username}</p>}
                <label className="label">Email:</label>
                <input
                    type="text"
                    name="email" 
                    ref={emailRef}                 
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
                <label className="label">Password:</label>
                <input
                    type="password"
                    name="password"
                    ref={passwordRef}
                />
                {formErrors.password && <p className="error">{formErrors.password}</p>}
                <label className="label">Confirm Password:</label>
                <input
                    type="password"
                    name="setpassword" 
                    ref={setpasswordRef}                
                />
               {formErrors.setpassword && <p className="error">{formErrors.setpassword}</p>}
                <input type="submit" value="Register" />
                <p>Yes i have an account? <span>Login</span></p>

                 {/* Social Media Icons */}
                 <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon facebook" />
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon whatsapp" />
                    </a>
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                        <FaTelegram className="icon telegram" />
                    </a>
                </div>
            </form>
        </div>
    );
};

export default UncontrolledForm;
