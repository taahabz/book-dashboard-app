import { useState } from 'react';

export default function ProfileEditor() {
  // Using useState with an object to store profile data
  const [profile, setProfile] = useState({
    name: 'Taaha',
    age: 20
  });

  // Handlers to update individual properties using the spread operator
  const handleNameChange = (e) => {
    // Using spread operator to copy all existing properties
    // and only update the "name" property
    setProfile({
      ...profile, // Copy all existing properties
      name: e.target.value // Update only the name property
    });
  };

  const handleAgeChange = (e) => {
    // Using spread operator to copy all existing properties
    // and only update the "age" property
    setProfile({
      ...profile, // Copy all existing properties
      age: e.target.value // Update only the age property
    });
  };

  return (
    <div className="h-full px-4 py-8">
      <div className="flex items-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00c8ff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h2 className="text-2xl font-semibold text-[#00c8ff]">Reader Profile</h2>
      </div>
      
      <div className="space-y-8">
        <div>
          <div className="text-[#00c8ff] font-medium mb-2">Name</div>
          <input
  type="text"
  value={profile.name}
  onChange={handleNameChange}
  className="w-full px-4 py-3 rounded-sm bg-transparent border-b border-[#1e3a8a] focus:border-[#00c8ff] transition"
  style={{ color: 'white' }}
/>
        </div>
        
        <div>
          <div className="text-[#00c8ff] font-medium mb-2">Age</div>
          <input
            type="number"
            value={profile.age}
            onChange={handleAgeChange}
            className="w-full px-4 py-3 rounded-sm bg-transparent border-b border-[#1e3a8a] focus:border-[#00c8ff] transition"
            style={{ color: 'white' }}

          />
        </div>
        
        <div className="mt-12 pt-6 border-t border-[#1e3a8a]">
          <div className="text-center text-[#00c8ff] text-xl mb-6">Profile Summary</div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Name:</span>
              <span className="text-white font-medium">{profile.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Age:</span>
              <span className="text-white font-medium">{profile.age}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 