import { useRole } from '../contexts/RoleContext';

export default function RoleSwitcher() {
  const { role, toggleRole } = useRole();

  const handleUserClick = () => {
    if (role === 'admin') {
      toggleRole();
    }
  };

  const handleAdminClick = () => {
    if (role === 'user') {
      toggleRole();
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-normal gap-2">
      <div className="flex items-center bg-[#111827] rounded-md">
        <button
          onClick={handleUserClick}
          className={`px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors rounded-l-md ${
            role === 'user' ? 'bg-[#00c8ff] text-[#0a0e1a]' : 'text-gray-400 hover:text-white'
          }`}
        >
          User
        </button>
        <button
          onClick={handleAdminClick}
          className={`px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors rounded-r-md ${
            role === 'admin' ? 'bg-[#00c8ff] text-[#0a0e1a]' : 'text-gray-400 hover:text-white'
          }`}
        >
          Admin
        </button>
      </div>
      <div className="text-xs sm:text-sm font-medium bg-[#111827] px-2 sm:px-3 py-1 rounded text-gray-400 border border-[#1e3a8a]">
        Role: <span className="text-[#00c8ff]">{role}</span>
      </div>
    </div>
  );
} 