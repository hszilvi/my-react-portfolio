import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState( {
        email: '',
        textMessage: ''
    });
    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');
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
        try {
            const response = await axios.post('/api/submit', formData);
            setResponseMessage(response.data.message);
        } catch (error) {
            setResponseMessage('Please enter valid email and text message.')
        }

    };
    const validateForm = (data) => {
        const errors = {};
        if (!data.email || !isValidEmail(data.email)) {
            errors.email = 'Please enter a valid email address';
        } else if (!data.textMessage) {
            errors.textMessage = 'Please fill the message field.';
        } else {
            return errors;

        }
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(email);

    }

    return (
        <>
        <div className='contact-wrapper mt-5 mb-5 border rounded'>
            <h4 className="h4 mt-5 mb-5">If you are interested in working together, get in touch with me.</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <input className='form-label border-success rounded' type='text' name='email' placeholder='email@example.com' value={formData.email} onChange={handleInputChange}></input>{errors.email && <p>{errors.email}</p>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <textarea className='form-label border-success rounded' name='textMessage' type='text' placeholder='type your message here' value={formData.textMessage} onChange={handleInputChange}></textarea>{errors.textMessage && <p>{errors.textMessage}</p>}
                </Form.Group>
                    <button className='btn btn-outline-success mb-5' type='submit'>Send</button>
                    {responseMessage && <p>{responseMessage}</p>}
                
            </Form>
        </div>
        </>
    )



 };

export default Contact; 