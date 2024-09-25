import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast, Bounce } from "react-toastify";

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: 'male',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [isUpdatesChecked, setIsUpdatesChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTermsChange = (e) => {
        setIsTermsAgreed(e.target.checked);
    };

    const handleUpdatesChange = (e) => {
        setIsUpdatesChecked(e.target.checked);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.password || !formData.confirmPassword) {
            toast.error('All fields are required!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        if (!isTermsAgreed) {
            toast.error('You must agree to the terms and conditions!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            return;
        }

        try{
            setIsLoading(true);
            // const res = await axios.post("", formData);
            // const data = await res.json();
            await new Promise((res, rej) => setTimeout(res, 2000)) 
            toast.success('Signed Up Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }catch(err){
            toast.error('Passwords do not match!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }finally{
            setIsLoading(false)
        }


        // console.log("Form Data: ", { ...formData, isTermsAgreed, isUpdatesChecked });
        // alert('Form submitted');
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
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="input-field-primary w-1/2"
                                required
                            />
                            <input
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="input-field-primary w-1/2"
                                required
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <input
                                    id="bordered-radio-1"
                                    type="radio"
                                    value="male"
                                    name="gender"
                                    className="custom-radio absolute opacity-0 w-0 h-0"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="bordered-radio-1" className="flex items-center cursor-pointer">
                                    <span className="custom-radio-visual w-6 h-6 inline-block mr-2 rounded border-2 border-black flex-shrink-0"></span>
                                    <span className="text-base">Male</span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="bordered-radio-2"
                                    type="radio"
                                    value="female"
                                    name="gender"
                                    className="custom-radio absolute opacity-0 w-0 h-0"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                />
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
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="input-field-primary"
                                required
                            />
                            <input
                                placeholder="Email"
                                type='email'
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input-field-primary"
                                required
                            />
                            <input
                                placeholder="Password"
                                type='password'
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="input-field-primary"
                                required
                            />
                            <input
                                placeholder="Confirm Password"
                                type='password'
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="input-field-primary"
                                required
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
                            {isLoading ? "Signing up..." : "Sign Up"}
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
