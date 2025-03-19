

import React, { useState } from 'react';
import axios from 'axios';

const ClientFeedback = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        vendorName: '',
        clientFeedback: '',
        serviceFeedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/feedback', formData);
            console.log('Form Data Submitted:', response.data);
            alert('Feedback submitted successfully!'); // Show success message
            window.location.href = '../client';
            // You can add your form submission success logic here
        } catch (error) {
            console.error('Error submitting form data:', error);
            // You can add your form submission error handling here
        }
    };

    return (
        <div>
            <h2>Client Feedback Form</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <label>Client Name:</label>
                    <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Vendor Name:</label>
                    <input
                        type="text"
                        name="vendorName"
                        value={formData.vendorName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Feedback about Vendor:</label>
                    <textarea
                        name="clientFeedback"
                        value={formData.clientFeedback}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Feedback about Our Service:</label>
                    <textarea
                        name="serviceFeedback"
                        value={formData.serviceFeedback}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ClientFeedback;