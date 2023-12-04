import React, { useState } from "react";

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    // Calculate rotation based on the combined length of name and email
    const [rotation, setRotation] = useState(0);

    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
        setRotation(0);
    };

    const handlePasswordBlur = () => {
        setIsPasswordFocused(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);

        if (e.target.value.length < 50) {
            setRotation(e.target.value.length - 30);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 50) {
            setRotation(e.target.value.length - 30);
        }
    };


    return (
        <div className="container">
            <img
                src={
                    isPasswordFocused
                        ? "https://img.freepik.com/free-vector/cartoon-boy-relaxing-with-closed-eyes_1308-153773.jpg"
                        : "https://img.freepik.com/premium-vector/cute-boy-face-smiling_1639-51752.jpg"
                }
                alt="Logo"
                // style={{
                //     transform: `rotate3d(1, 1, 1, ${rotation}deg) skewY(-${slant}deg)`
                // }}
                style={{
                    transform: `perspective(100px) rotateX(-28deg) rotateY(${rotation}deg)`
                }}
            />

            <form className="form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onFocus={handlePasswordFocus}
                        onBlur={handlePasswordBlur}
                    />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
