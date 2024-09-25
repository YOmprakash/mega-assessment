import { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  // const fetchProfile = async () => {
  //   const response = await axios.get('/api/profile', {
  //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  //   });
  //   setProfile(response.data);
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  // const handleUpdateProfile = async (e) => {
  //   e.preventDefault();
  //   await axios.put('/api/profile', profile, {
  //     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  //   });
  //   alert('Profile updated successfully!');
  // };

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-2xl font-semibold text-center text-gray-700">Edit Profile</h1>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-600" htmlFor="name">Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600" htmlFor="email">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
