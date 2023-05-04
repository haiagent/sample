import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="w-full px-4 py-2 border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;