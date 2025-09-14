import React, { useState } from "react";
import axios from "axios";
import "./Private.css";

function Private() {
    const [password, setPassword] = useState("");
    const [messageData, setMessageData] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "https://messageserver-jxis.onrender.com/get-messages",
                { password }
            );

            if (response.data.valid) {
                setMessageData(response.data.messages);
                setError(""); // Clear any previous errors
            } else {
                setMessageData([]); // Clear message data if password is invalid
                setError("Invalid Password!");
            }
        } catch (error) {
            console.log("Something went wrong!", error);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="private-section">
                <input
                    className="password-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Secret Key"
                />
                <button className="authenticate-button" onClick={handleSubmit}>
                    Authenticate
                </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {messageData.length > 0 && (
                <div className="message-list">
                    {messageData.map((message, index) => (
                        <div key={index} className="message-item">
                            <p>
                                <strong>Name:</strong> {message.name}
                            </p>
                            <p>
                                <strong>Email:</strong> {message.email}
                            </p>
                            <p>
                                <strong>Message:</strong> {message.message}
                            </p>
                            <p>
                                <strong>Timestamp:</strong>{" "}
                                {new Date(message.timestamp).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Private;
