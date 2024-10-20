import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig.js';
import signupBackground from '/signin-background.png';
import companyLogo from '/logo large 1.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Firebase signup function
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully');
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${signupBackground})` }}
    >
      <img
        alt="Company Logo"
        src={companyLogo}
        className="absolute left-0 m-4 top-0"
      />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2
            style={{ color: '#212121' }}
            className="mt-4 text-center text-3xl font-extrabold leading-9"
          >
            Create Your Account
          </h2>
          <p style={{ color: '#212121' }} className="mt-2 text-center text-sm">
            Manage your meeting rooms with ease and efficiency.
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#F5F6F7] p-10 shadow rounded-2xl sm:px-10">
            <h2 className="text-center text-xl font-semibold text-gray-700">
              Sign up for a new account
            </h2>
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="e.g. johndoe@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 cursor-pointer"
                  >
                    {showPassword ? (
                      <span className="flex items-center gap-1 text-[14px]">
                        <AiOutlineEyeInvisible />
                        <span>Hide</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[14px]">
                        <AiOutlineEye />
                        <span>Unhide</span>
                      </span>
                    )}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="e.g. ••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full bg-primaryblue py-3 px-4 text-sm font-medium text-white shadow-sm hover:shadow-1 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
