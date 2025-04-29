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
          <header className="px-6 py-4 flex items-center justify-between border-b border-blue-500/30">
            <div>
              <h1 className="text-5xl font-bold text-[#00c8ff]">Bookparho</h1>
              <p className="text-gray-400">Manage your reading collection</p>
            </div>
            <RoleSwitcher />
          </header>
          <main className="flex flex-row flex-1 overflow-hidden">
            <div className="w-1/2 overflow-y-auto border-r border-[#1e3a8a]">
              <ProfileEditor />
            </div>
            <div className="w-1/2 overflow-y-auto">
              <BookList />
            </div>
          </main>
          <footer className="text-center text-[#00c8ff]/40 py-3 px-6 border-t border-blue-500/20">
            <p>Bookparho App © {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </RoleProvider>
  );
}

export default App;
