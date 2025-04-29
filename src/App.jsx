import { RoleProvider } from './contexts/RoleContext';
import RoleSwitcher from './components/RoleSwitcher';
import ProfileEditor from './components/ProfileEditor';
import BookList from './components/BookList';
import './App.css';

function App() {
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
          <main className="flex flex-col md:flex-row flex-1 overflow-hidden">
            <div className="w-full md:w-1/2 overflow-y-auto border-b md:border-b-0 md:border-r border-[#1e3a8a]">
              <ProfileEditor />
            </div>
            <div className="w-full md:w-1/2 overflow-y-auto">
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
