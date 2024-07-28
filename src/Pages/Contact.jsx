import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_66g0y82', 'template_k9u1gwo', form.current, 'gnM4a3b_UDnnT68ac')
      .then(
        () => {
          setMessage('Message sent successfully!');
          form.current.reset();
          setTimeout(() => {
            setMessage('');
          }, 5000); // Message will disappear after 5 seconds
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        }
      );
  };
//why is the h2 far from the form?
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h2 className="text-3xl font-bold text-[#AEADF9] text-center">Get in Touch</h2>
      <div className="flex flex-col md:flex-row overflow-hidden max-w-4xl w-full mt-6 md:mt-10">
        <div className="flex items-center justify-center text-white p-8 md:p-16">
          <i className="fas fa-envelope-open-text text-9xl md:text-11xl"></i>
        </div>
        <div className="p-8 md:p-16 flex-1 flex flex-col  justify-start">
          
          {message && (
            <div className={`mb-4 p-4 w-full text-center ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-md`}>
              {message}
            </div>
          )}
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="mb-4 text-black">
              <input
                type="text"
                name="user_name"
                placeholder="Write your name...."
                className="mt-1 p-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Write your email...."
                className="mt-1 p-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6 text-black">
              <textarea
                name="message"
                placeholder="Your message...."
                rows="4"
                className="mt-1 p-4 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#AEADF9] text-black  py-3 rounded-md hover:bg-purple-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
