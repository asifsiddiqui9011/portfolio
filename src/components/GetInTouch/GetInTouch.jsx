import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './GetInTouch.css'; // Assuming you have a CSS file for styling

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these with your EmailJS service details
        const serviceID = 'service_6h8cl2f';
        const templateID = 'template_3gkjbjm';
        const userID = 'y9YG52TAcV4RPktk9';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((result) => {
                console.log(result.text);
                alert('Your message was sent successfully!');
                setFormData({ email: '', message: '' });
            }, (error) => {
                console.error(error.text);
                alert('An error occurred, please try again.');
            });
    };

    return (
        <div className="get-in-touch">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Your Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default GetInTouch;