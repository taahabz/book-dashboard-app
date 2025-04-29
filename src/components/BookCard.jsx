import { useState } from 'react';
import { useRole } from '../contexts/RoleContext';

export default function BookCard({ book, onDelete, onEdit }) {
  const { role } = useRole();
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState({...book});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: value
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedBook);
    setIsEditing(false);
  };

  return (
    <div className="bg-[#111827] rounded-md border border-[#1e3a8a] overflow-hidden">
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="p-4 space-y-3">
          <div>
            <label className="block text-xs text-[#00c8ff] mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#0f172a] border border-[#1e3a8a]"
              required
            />
          </div>
          
          <div>
            <label className="block text-xs text-[#00c8ff] mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={editedBook.author}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded bg-[#0f172a] border border-[#1e3a8a]"
              required
            />
          </div>
          
          <div className="flex space-x-2 pt-2">
            <button 
              type="submit"
              className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Save
            </button>
            <button 
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditedBook({...book});
              }}
              className="px-3 py-1.5 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between p-4">
          <div className="flex-1">
            <h3 className="font-medium text-white">{book.title}</h3>
            <p className="text-gray-400 text-sm">{book.author}</p>
          </div>
          
          {role === 'admin' && (
            <div className="flex space-x-2">
              <button 
                onClick={() => setIsEditing(true)}
                className="p-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Edit book"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                onClick={() => onDelete(book.id)}
                className="p-1.5 text-red-400 hover:text-red-300 transition-colors"
                aria-label="Delete book"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 