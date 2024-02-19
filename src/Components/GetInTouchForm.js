import React, { useState, useEffect } from "react";
import "./../Styles/GetInTouchPage.css";

const GetInTouchForm = ({ showForm, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    // Update word count when the message changes
    const words = message.trim().split(/\s+/);
    setWordCount(words.length);
  }, [message]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Assuming you're using Formspree as your form endpoint
    const formspreeEndpoint = "https://formspree.io/f/mnqejone";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSubmissionMessage("Form submitted successfully! Thank you.");

        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");

        // Hide the form after successful submission
        setFormVisible(false);

        // Reset form visibility after a delay
        setTimeout(() => {
          setFormVisible(true);
        }, 2000);
      } else {
        setSubmissionMessage("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionMessage("Form submission failed. Please try again.");
    }
  };

  return (
    <div
      className={`get-in-touch-form ${showForm ? "show" : ""}`}
      style={{ zIndex: 1000 }}
    >
      <div className="form-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {showForm && formVisible && (
          <div className="card">
            <h2>Contact Me</h2>
            <p>Feel free to contact me using the form below.</p>

            {submissionMessage ? (
              <p className="submission-message">{submissionMessage}</p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    maxLength="200"
                    value={message}
                    onChange={handleMessageChange}
                    required
                  ></textarea>
                  <small className="word-count">{wordCount}/1000 words</small>
                </div>

                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInTouchForm;
