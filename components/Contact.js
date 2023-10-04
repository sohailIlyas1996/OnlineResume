// ./components/Contact.js
import React, { useState } from 'react';
import myimg from '../public/Images/pic.jpeg'; // Import the image
import Image from 'next/image';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      console.log('Please fill in all fields.');
      return;
    }

    // Add your logic to handle the form submission, e.g., sending data to a server
    console.log('Form submitted:', formData);

    // Example: Send email using Email.js (replace with your email service)
    // Assuming you have set up an Email.js account and have the relevant credentials
    // More details: https://www.emailjs.com/docs/rest-api/send/
    // const serviceID = 'your_emailjs_service_id';
    // const templateID = 'your_emailjs_template_id';
    // const userID = 'your_emailjs_user_id';

    // fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     service_id: serviceID,
    //     template_id: templateID,
    //     user_id: userID,
    //     template_params: {
    //       name: formData.name,
    //       email: formData.email,
    //       subject: formData.subject,
    //       message: formData.message,
    //     },
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Email sent:', data);
    //     // You can add further logic here, such as displaying a success message
    //   })
    //   .catch(error => {
    //     console.error('Error sending email:', error);
    //     // Handle error, e.g., display an error message to the user
    //   });
  };

  return (
    <div id='contact-section' className='w-full h-screen bg-gray-100'>
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-4/5">
          <div className="flex items-center justify-center mb-6">
         
            <h1 className="text-2xl font-semibold">Contact Me</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-bold mb-2">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Subject"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
