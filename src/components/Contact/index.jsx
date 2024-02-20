import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
// import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState( {
        email: '',
        textMessage: ''
    });
    const [errors, setErrors] = useState({
        email: null,
        textMessage: null
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData( {
            ...formData,
            [name]: value,
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

    };

    const validateForm = (data) => {
        console.log(data)
        const error = {};
        if (!data.email || !isValidEmail(data.email)) {
            
            error.email = 'Please enter a valid email address.';
            console.log(error.email)
            console.log(error)
            setErrors((prev) => ({...prev, email: error.email}))
        } else if (!data.textMessage) {
            error.textMessage = 'Please fill the message field.';
            console.log(error.textMessage)
            setErrors((prev) => ({...prev, textMessage: error.textMessage}))
        } else {
            return error;

        }
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(emailRegex.test(email))
        return emailRegex.test(email);
    }

    return (
        <>
        <div className='contact-wrapper mt-5 mb-5 border rounded'>
            <h4 className="h4 mt-5 mb-5">If you are interested in working together, get in touch with me.</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <input className='form-label border-success rounded' type='text' name='email' placeholder='email@example.com' value={formData.email} onChange={handleInputChange}></input>{errors && errors.email ? <p className='text-danger fw-bolder'>{errors.email}</p> : ''}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <textarea className='form-label border-success rounded' name='textMessage' type='text' placeholder='type your message here' value={formData.textMessage} onChange={handleInputChange}></textarea>
                    {errors && errors.textMessage ? <p className='text-danger fw-bolder'>{errors.textMessage}</p> : ''}
                </Form.Group>
                    <button className='btn btn-outline-success mb-5' type='submit'>Send</button>

                
            </Form>
        </div>
        </>
    )



 };

export default Contact; 