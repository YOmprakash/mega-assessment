import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/login', { email, password });
      // localStorage.setItem('token', response.data.token);
      // alert('Login successful!');
      window.location.href = '/todos';
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 font-bold text-white transition duration-300 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don’t have an account? </span>
          <a href="#" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
