import React, { useState, useEffect } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowToast(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "54963b8a-adc3-4b8d-a6a0-53c4307817b3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(" Form submitted successfully!");
      event.target.reset();
    } else {
      setResult(` ${data.message || "Something went wrong!"}`);
    }

    setShowToast(true);

    // Auto-hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 relative">
      {/* Toast Popup */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-white text-black px-6 py-3 rounded-lg shadow-lg border border-purple-300 z-50 animate-fade-in-up">
          <span className="text-sm font-medium">{result}</span>
        </div>
      )}

      <div className="bg-white w-full max-w-5xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row shadow-2xl">
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center ">Let's talk</h2>
          <hr className="h-1 w-10 mx-auto mb-2 bg-gradient-to-r from-indigo-300 to-purple-300" />

          <p className="text-gray-600 mb-8 text-sm leading-relaxed text-center">
            Fill out the form below or reach out directly — we'd love to hear from you. <br />
            You can also email me at{" "}
            <a
              href="mailto:mahnoorkhan@gmail.com"
              className="text-purple-600 underline hover:text-purple-800 transition duration-300"
            >
              mahnoorkhan1034@gmail.com
            </a>.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 ring-purple-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 ring-purple-300"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-gray-100 rounded-xl px-5 py-3 text-sm outline-none focus:ring-2 ring-purple-300 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-300 to-purple-300 hover:from-purple-400 hover:to-indigo-400 text-black font-semibold py-3 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
