// src/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        window.location.href = `mailto:luis.alejo.rg@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}%0D%0A%0D%0AFrom: ${email}`;
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-10/12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">JOIN US</h2>
            <p className="mb-6">Contact us and be part of the family, tell us how we can partner up.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Your Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Subject</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={4}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Contact
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
