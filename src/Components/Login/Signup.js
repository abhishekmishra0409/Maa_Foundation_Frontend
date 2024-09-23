import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [isUpdatesChecked, setIsUpdatesChecked] = useState(false);

    const handleTermsChange = (e) => {
        setIsTermsAgreed(e.target.checked);
    };

    const handleUpdatesChange = (e) => {
        setIsUpdatesChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isTermsAgreed) {
            alert('You must agree to the terms and conditions.');
            return;
        }
        // Handle the form submission logic here
        alert('Form submitted');
    };

    return (
        <div className="flex min-h-screen bg-cover bg-center relative">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/background.jpg')",
                }}
            />
            <div className="w-full md:w-1/2 relative z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
                    }}
                />
            </div>

            <div className="w-full md:w-1/2 bg-white bg-opacity-90 md:bg-opacity-100 z-20 flex flex-col items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-md space-y-8">
                    <Link to="/" className="group absolute top-4 left-4 p-2 text-white transition-colors py-2 px-6 border backdrop-blur-sm border-primary-base hover:bg-primary-base hover:text-white text-sm font-bold rounded-xl no-underline">
                        <span className="underline text-primary-base group-hover:text-white">Home</span>
                    </Link>
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-primary">Registration</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-center space-x-4">
                            <input
                                placeholder="First Name"
                                className="input-field-primary w-1/2"
                            />
                            <input
                                placeholder="Last Name"
                                className="input-field-primary w-1/2"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <input id="bordered-radio-1" type="radio" value="male" name="gender" className="custom-radio absolute opacity-0 w-0 h-0" defaultChecked />
                                <label htmlFor="bordered-radio-1" className="flex items-center cursor-pointer">
                                    <span className="custom-radio-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                    <span className="text-base">Male</span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input id="bordered-radio-2" type="radio" value="female" name="gender" className="custom-radio absolute opacity-0 w-0 h-0" />
                                <label htmlFor="bordered-radio-2" className="flex items-center cursor-pointer">
                                    <span className="custom-radio-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                    <span className="text-base">Female</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <input
                                placeholder="Phone Number"
                                type='tel'
                                className="input-field-primary"
                            />
                            <input
                                placeholder="Email"
                                type='email'
                                className="input-field-primary"
                            />
                            <input
                                placeholder="Password"
                                type='password'
                                className="input-field-primary"
                            />
                            <input
                                placeholder="Confirm Password"
                                type='password'
                                className="input-field-primary"
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms-checkbox"
                                    className="custom-checkbox"
                                    checked={isTermsAgreed}
                                    onChange={handleTermsChange}
                                    required
                                />
                                <label htmlFor="terms-checkbox" className="ms-2 text-base text-gray-600 dark:text-gray-900 cursor-pointer">
                                    <span className="custom-checkbox-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                    <span>Agree to the terms and conditions</span>
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="updates-checkbox"
                                    className="custom-checkbox"
                                    checked={isUpdatesChecked}
                                    onChange={handleUpdatesChange}
                                />
                                <label htmlFor="updates-checkbox" className="ms-2 text-base text-gray-600 dark:text-gray-900 cursor-pointer">
                                    <span className="custom-checkbox-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                    <span>Notify me for all updates</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="btn-primary w-full md:w-2/3 text-lg">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-gray-600 text-sm">
                        Already have an account |{" "}
                        <a className="text-primary-base hover:underline" href="/login">
                            login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;