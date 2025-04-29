import { RoleProvider } from './contexts/RoleContext';
import RoleSwitcher from './components/RoleSwitcher';
import ProfileEditor from './components/ProfileEditor';
import BookList from './components/BookList';
import './App.css';
import { useState } from 'react';

function App() {
  const [activePanel, setActivePanel] = useState('books'); // 'profile' or 'books'

  const togglePanel = (panel) => {
    setActivePanel(panel);
  };

  return (
    <RoleProvider>
      <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
        <div className="w-full max-w-full mx-auto flex flex-col h-screen">
          <header className="px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between border-b border-blue-500/30">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold text-[#00c8ff]">Bookparho</h1>
              <p className="text-gray-400">Manage your reading collection</p>
            </div>
            <RoleSwitcher />
          </header>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex border-b border-[#1e3a8a]">
            <button 
              onClick={() => togglePanel('profile')}
              className={`flex-1 py-3 text-center text-sm font-medium ${
                activePanel === 'profile' 
                  ? 'text-[#00c8ff] border-b-2 border-[#00c8ff]' 
                  : 'text-gray-400'
              }`}
            >
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </div>
            </button>
            <button 
              onClick={() => togglePanel('books')}
              className={`flex-1 py-3 text-center text-sm font-medium ${
                activePanel === 'books' 
                  ? 'text-[#00c8ff] border-b-2 border-[#00c8ff]' 
                  : 'text-gray-400'
              }`}
            >
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Books
              </div>
            </button>
          </div>
          
          <main className="flex flex-col md:flex-row flex-1 overflow-hidden">
            <div className={`w-full md:w-1/2 overflow-y-auto md:border-r border-[#1e3a8a] ${activePanel === 'profile' ? 'block' : 'hidden md:block'}`}>
              <ProfileEditor />
            </div>
            <div className={`w-full md:w-1/2 overflow-y-auto ${activePanel === 'books' ? 'block' : 'hidden md:block'}`}>
              <BookList />
            </div>
          </main>
          <footer className="text-center text-[#00c8ff]/40 py-2 sm:py-3 px-3 sm:px-6 border-t border-blue-500/20">
            <p>Bookparho App © {new Date().getFullYear()}</p>
            <p className="text-xs sm:text-sm flex flex-wrap justify-center gap-2">
              Created with ❤️ by 
              <a href="https://github.com/taahabz" className="text-[#00c8ff] hover:underline">Taaha</a>
              <a href="https://github.com/hubgit1899" className="text-[#00c8ff] hover:underline">Junaid</a>
              <a href="https://github.com/HamzaHannan001" className="text-[#00c8ff] hover:underline">Hamza</a>
            </p>
          </footer>
        </div>
      </div>
    </RoleProvider>
  );
}

export default App;
