import { useState } from 'react';
import BookCard from './BookCard';
import { useRole } from '../contexts/RoleContext';

export default function BookList() {
  // Using the role context
  const { role } = useRole();
  
  // State for books array (array of objects)
  const [books, setBooks] = useState([
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' }
  ]);
  
  // State for new book form
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new book
  const addBook = (e) => {
    e.preventDefault();
    
    // Only add if fields aren't empty
    if (newBook.title.trim() && newBook.author.trim()) {
      // Generate a unique ID (max id + 1)
      const lastId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;
      
      // Create new book object
      const bookToAdd = {
        ...newBook,
        id: lastId + 1
      };
      
      // Add new book to the array
      setBooks([...books, bookToAdd]);
      
      // Reset the form
      setNewBook({ title: '', author: '' });
    }
  };

  // Function to delete a book (using filter)
  const deleteBook = (id) => {
    // Filter out the book with the matching id
    setBooks(books.filter(book => book.id !== id));
  };

  // Function to edit a book
  const editBook = (editedBook) => {
    // Map through books and replace the edited one
    setBooks(books.map(book => 
      book.id === editedBook.id ? editedBook : book
    ));
  };

  // Handle input changes for the new book form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value // Using computed property name
    });
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter books based on search term
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#00c8ff] mb-6">Book Collection</h2>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-3 rounded-sm bg-transparent border-b border-[#1e3a8a] focus:border-[#00c8ff] transition mb-8"
        />
      </div>
      
      <div>
        <div className="text-[#00c8ff] font-medium mb-4">Book List</div>
        <div className="space-y-0">
          {filteredBooks.map(book => (
            <div key={book.id} className="border-b border-[#1e3a8a] py-3">
              <div className="text-white font-medium">{book.title}</div>
              <div className="text-gray-400 text-sm">{book.author}</div>
              {role === 'admin' && (
                <div className="mt-1 flex space-x-2">
                  <button 
                    className="text-xs text-[#00c8ff] hover:underline"
                    onClick={() => {
                      const updatedTitle = prompt('Enter new title:', book.title);
                      const updatedAuthor = prompt('Enter new author:', book.author);
                      if (updatedTitle && updatedAuthor) {
                        editBook({...book, title: updatedTitle, author: updatedAuthor});
                      }
                    }}
                  >
                    Edit
                  </button>
                  <button 
                    className="text-xs text-red-400 hover:underline"
                    onClick={() => deleteBook(book.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
          {filteredBooks.length === 0 && (
            <div className="text-center text-gray-400 py-4">
              No books found. Try a different search term or add some books!
            </div>
          )}
        </div>
      </div>
      
      {role === 'admin' && (
        <div className="mt-12 pt-6 border-t border-[#1e3a8a]">
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <div className="text-[#00c8ff] font-medium">Add New Book</div>
          </div>
          <form onSubmit={addBook} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-sm bg-transparent border-b border-[#1e3a8a] focus:border-[#00c8ff] transition"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-sm bg-transparent border-b border-[#1e3a8a] focus:border-[#00c8ff] transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#00c8ff] text-[#0a0e1a] rounded font-medium hover:opacity-90 transition"
            >
              Add Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
} 