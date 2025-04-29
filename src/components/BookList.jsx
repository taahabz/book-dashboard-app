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
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { "id": 5, "title": "The Catcher in the Rye", "author": "J.D. Salinger" },
    { "id": 6, "title": "Animal Farm", "author": "George Orwell" },
    { "id": 7, "title": "The Adventures of Huckleberry Finn", "author": "Mark Twain" },
    { "id": 8, "title": "Jane Eyre", "author": "Charlotte Brontë" },
    { "id": 9, "title": "Little Women", "author": "Louisa May Alcott" },
    { "id": 10, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien" },
    { "id": 11, "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling" },
    { "id": 12, "title": "The Hobbit", "author": "J.R.R. Tolkien" },
    { "id": 13, "title": "The Chronicles of Narnia", "author": "C.S. Lewis" },
    { "id": 14, "title": "One Hundred Years of Solitude", "author": "Gabriel García Márquez" },
    { "id": 15, "title": "Brave New World", "author": "Aldous Huxley" },
    { "id": 16, "title": "Moby Dick", "author": "Herman Melville" },
    { "id": 17, "title": "Wuthering Heights", "author": "Emily Brontë" },
    { "id": 18, "title": "The Scarlet Letter", "author": "Nathaniel Hawthorne" },
    { "id": 19, "title": "Frankenstein", "author": "Mary Shelley" },
    { "id": 20, "title": "Dracula", "author": "Bram Stoker" },
    { "id": 21, "title": "The Picture of Dorian Gray", "author": "Oscar Wilde" },
    { "id": 22, "title": "The Old Man and the Sea", "author": "Ernest Hemingway" },
    { "id": 23, "title": "The Grapes of Wrath", "author": "John Steinbeck" },
    { "id": 24, "title": "Catch-22", "author": "Joseph Heller" },
    { "id": 25, "title": "Slaughterhouse-Five", "author": "Kurt Vonnegut" },
    { "id": 26, "title": "Beloved", "author": "Toni Morrison" },
    { "id": 27, "title": "The Handmaid's Tale", "author": "Margaret Atwood" },
    { "id": 28, "title": "The Alchemist", "author": "Paulo Coelho" },
    { "id": 29, "title": "The Little Prince", "author": "Antoine de Saint-Exupéry" },
    { "id": 30, "title": "Don Quixote", "author": "Miguel de Cervantes" },
    { "id": 31, "title": "Hamlet", "author": "William Shakespeare" },
    { "id": 32, "title": "Macbeth", "author": "William Shakespeare" },
    { "id": 33, "title": "Romeo and Juliet", "author": "William Shakespeare" },
    { "id": 34, "title": "Invisible Man", "author": "Ralph Ellison" },
    { "id": 35, "title": "Things Fall Apart", "author": "Chinua Achebe" },
    { "id": 36, "title": "The Color Purple", "author": "Alice Walker" },
    { "id": 37, "title": "A Thousand Splendid Suns", "author": "Khaled Hosseini" },
    { "id": 38, "title": "The Kite Runner", "author": "Khaled Hosseini" },
    { "id": 39, "title": "Life of Pi", "author": "Yann Martel" },
    { "id": 40, "title": "The Book Thief", "author": "Markus Zusak" },
    { "id": 41, "title": "The Secret Garden", "author": "Frances Hodgson Burnett" },
    { "id": 42, "title": "The Call of the Wild", "author": "Jack London" },
    { "id": 43, "title": "White Teeth", "author": "Zadie Smith" },
    { "id": 44, "title": "The Road", "author": "Cormac McCarthy" },
    { "id": 45, "title": "Never Let Me Go", "author": "Kazuo Ishiguro" },
    { "id": 46, "title": "The Remains of the Day", "author": "Kazuo Ishiguro" },
    { "id": 47, "title": "Midnight's Children", "author": "Salman Rushdie" },
    { "id": 48, "title": "The God of Small Things", "author": "Arundhati Roy" },
    { "id": 49, "title": "The Joy Luck Club", "author": "Amy Tan" },
    { "id": 50, "title": "The Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams" },
    { "id": 51, "title": "The Da Vinci Code", "author": "Dan Brown" },
  { "id": 52, "title": "Angels & Demons", "author": "Dan Brown" },
  { "id": 53, "title": "The Girl with the Dragon Tattoo", "author": "Stieg Larsson" },
  { "id": 54, "title": "Gone Girl", "author": "Gillian Flynn" },
  { "id": 55, "title": "The Hunger Games", "author": "Suzanne Collins" },
  { "id": 56, "title": "Catching Fire", "author": "Suzanne Collins" },
  { "id": 57, "title": "Mockingjay", "author": "Suzanne Collins" },
  { "id": 58, "title": "The Fault in Our Stars", "author": "John Green" },
  { "id": 59, "title": "Looking for Alaska", "author": "John Green" },
  { "id": 60, "title": "Paper Towns", "author": "John Green" },
  { "id": 61, "title": "Divergent", "author": "Veronica Roth" },
  { "id": 62, "title": "Insurgent", "author": "Veronica Roth" },
  { "id": 63, "title": "Allegiant", "author": "Veronica Roth" },
  { "id": 64, "title": "The Maze Runner", "author": "James Dashner" },
  { "id": 65, "title": "The Scorch Trials", "author": "James Dashner" },
  { "id": 66, "title": "The Death Cure", "author": "James Dashner" },
  { "id": 67, "title": "The Help", "author": "Kathryn Stockett" },
  { "id": 68, "title": "The Secret Life of Bees", "author": "Sue Monk Kidd" },
  { "id": 69, "title": "Water for Elephants", "author": "Sara Gruen" },
  { "id": 70, "title": "The Lovely Bones", "author": "Alice Sebold" },
  { "id": 71, "title": "Little Fires Everywhere", "author": "Celeste Ng" },
  { "id": 72, "title": "Everything I Never Told You", "author": "Celeste Ng" },
  { "id": 73, "title": "Where the Crawdads Sing", "author": "Delia Owens" },
  { "id": 74, "title": "Eleanor Oliphant Is Completely Fine", "author": "Gail Honeyman" },
  { "id": 75, "title": "A Man Called Ove", "author": "Fredrik Backman" },
  { "id": 76, "title": "Anxious People", "author": "Fredrik Backman" },
  { "id": 77, "title": "The Midnight Library", "author": "Matt Haig" },
  { "id": 78, "title": "The Invisible Life of Addie LaRue", "author": "V.E. Schwab" },
  { "id": 79, "title": "Circe", "author": "Madeline Miller" },
  { "id": 80, "title": "The Song of Achilles", "author": "Madeline Miller" },
  { "id": 81, "title": "Project Hail Mary", "author": "Andy Weir" },
  { "id": 82, "title": "The Martian", "author": "Andy Weir" },
  { "id": 83, "title": "Daisy Jones & The Six", "author": "Taylor Jenkins Reid" },
  { "id": 84, "title": "The Seven Husbands of Evelyn Hugo", "author": "Taylor Jenkins Reid" },
  { "id": 85, "title": "Normal People", "author": "Sally Rooney" },
  { "id": 86, "title": "Conversations with Friends", "author": "Sally Rooney" },
  { "id": 87, "title": "Where'd You Go, Bernadette", "author": "Maria Semple" },
  { "id": 88, "title": "Big Little Lies", "author": "Liane Moriarty" },
  { "id": 89, "title": "The Silent Patient", "author": "Alex Michaelides" },
  { "id": 90, "title": "The Guest List", "author": "Lucy Fokley" },
  { "id": 91, "title": "The Sanatorium", "author": "Sarah Pearse" },
  { "id": 92, "title": "The Plot", "author": "Jean Hanff Korelitz" },
  { "id": 93, "title": "Leave the World Behind", "author": "Rumaan Alam" },
  { "id": 94, "title": "Hamnet", "author": "Maggie O'Farrell" },
  { "id": 95, "title": "The Vanishing Half", "author": "Brit Bennett" },
  { "id": 96, "title": "Transcendent Kingdom", "author": "Yaa Gyasi" },
  { "id": 97, "title": "Homegoing", "author": "Yaa Gyasi" },
  { "id": 98, "title": "Americanah", "author": "Chimamanda Ngozi Adichie" },
  { "id": 99, "title": "Half of a Yellow Sun", "author": "Chimamanda Ngozi Adichie" },
  { "id": 100, "title": "The Immortal Life of Henrietta Lacks", "author": "Rebecca Skloot" },
  { "id": 101, "title": "Fifty Shades of Grey", "author": "E.L. James" },
  { "id": 102, "title": "Fifty Shades Darker", "author": "E.L. James" },
  { "id": 103, "title": "Fifty Shades Freed", "author": "E.L. James" },
  { "id": 104, "title": "Bared to You", "author": "Sylvia Day" },
  { "id": 105, "title": "Reflected in You", "author": "Sylvia Day" },
  { "id": 106, "title": "Entwined with You", "author": "Sylvia Day" },
  { "id": 107, "title": "Captivated by You", "author": "Sylvia Day" },
  { "id": 108, "title": "Cross My Heart", "author": "Sylvia Day" },
  { "id": 109, "title": "Gabriel's Inferno", "author": "Sylvain Reynard" },
  { "id": 110, "title": "Gabriel's Rapture", "author": "Sylvain Reynard" },
  { "id": 111, "title": "Gabriel's Redemption", "author": "Sylvain Reynard" },
  { "id": 112, "title": "Beautiful Disaster", "author": "Jamie McGuire" },
  { "id": 113, "title": "Walking Disaster", "author": "Jamie McGuire" },
  { "id": 114, "title": "Thoughtless", "author": "S.C. Stephens" },
  { "id": 115, "title": "Effortless", "author": "S.C. Stephens" },
  { "id": 116, "title": "Reckless", "author": "S.C. Stephens" },
  { "id": 117, "title": "The Hating Game", "author": "Sally Thorne" },
  { "id": 118, "title": "From Lukov with Love", "author": "Mariana Zapata" },
  { "id": 119, "title": "The Love Hypothesis", "author": "Ali Hazelwood" },
  { "id": 120, "title": "Twisted Love", "author": "Ana Huang" },
  { "id": 121, "title": "Twisted Games", "author": "Ana Huang" },
  { "id": 122, "title": "Twisted Hate", "author": "Ana Huang" },
  { "id": 123, "title": "Twisted Lies", "author": "Ana Huang" },
  { "id": 124, "title": "Credence", "author": "Penelope Douglas" },
  { "id": 125, "title": "Punk 57", "author": "Penelope Douglas" },
  { "id": 126, "title": "Birthday Girl", "author": "Penelope Douglas" },
  { "id": 127, "title": "Corrupt", "author": "Penelope Douglas" },
  { "id": 128, "title": "Hideaway", "author": "Penelope Douglas" },
  { "id": 129, "title": "Kill Switch", "author": "Penelope Douglas" },
  { "id": 130, "title": "Devil's Night Series", "author": "Penelope Douglas" },
  { "id": 131, "title": "The Maddest Obsession", "author": "Danielle Lori" },
  { "id": 132, "title": "The Sweetest Oblivion", "author": "Danielle Lori" },
  { "id": 133, "title": "The Darkest Temptation", "author": "Danielle Lori" },
  { "id": 134, "title": "Neon Gods", "author": "Katee Robert" },
  { "id": 135, "title": "Electric Idol", "author": "Katee Robert" },
  { "id": 136, "title": "Wicked Beauty", "author": "Katee Robert" },
  { "id": 137, "title": "Dark Olympus Series", "author": "Katee Robert" },
  { "id": 138, "title": "A Court of Thorns and Roses", "author": "Sarah J. Maas" },
  { "id": 139, "title": "A Court of Mist and Fury", "author": "Sarah J. Maas" },
  { "id": 140, "title": "A Court of Wings and Ruin", "author": "Sarah J. Maas" },
  { "id": 141, "title": "From Blood and Ash", "author": "Jennifer L. Armentrout" },
  { "id": 142, "title": "A Kingdom of Flesh and Fire", "author": "Jennifer L. Armentrout" },
  { "id": 143, "title": "The Crown of Gilded Bones", "author": "Jennifer L. Armentrout" },
  { "id": 144, "title": "Me Before You", "author": "Jojo Moyes" },
  { "id": 145, "title": "After", "author": "Anna Todd" },
  { "id": 146, "title": "The Kiss Quotient", "author": "Helen Hoang" },
  { "id": 147, "title": "Get Lucky", "author": "Erin McCarthy" },
  { "id": 148, "title": "Say You'll Stay", "author": "Corinne Michaels" },
  { "id": 149, "title": "Dirty Letters", "author": "Vi Keeland & Penelope Ward" },
  { "id": 150, "title": "Cocky Bastard", "author": "Vi Keeland & Penelope Ward" },
  { "id": 151, "title": "The Deal", "author": "Elle Kennedy" },
  { "id": 152, "title": "The Mistake", "author": "Elle Kennedy" },
  { "id": 153, "title": "The Score", "author": "Elle Kennedy" },


    
  ]);
  
  // State for new book form
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for mobile form visibility
  const [showAddForm, setShowAddForm] = useState(false);

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
      
      // Hide the form on mobile after adding
      setShowAddForm(false);
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
    <div className="h-full px-4 py-5 max-w-lg mx-auto">
      <div className="md:flex md:items-center mb-6 hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c8ff] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#00c8ff]">Book Collection</h2>
      </div>
      
      <div className="mb-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 pl-10 rounded-lg bg-[#111827] border border-[#1e3a8a] focus:border-[#00c8ff] transition text-white"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="mb-4 flex justify-between items-center">
        <div className="text-[#00c8ff] font-medium">Book List</div>
        {role === 'admin' && (
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center text-sm text-[#00c8ff] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {showAddForm ? 'Cancel' : 'Add Book'}
          </button>
        )}
      </div>
      
      {role === 'admin' && showAddForm && (
        <div className="mb-6 bg-[#111827] p-4 rounded-lg border border-[#1e3a8a]">
          <form onSubmit={addBook} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1 text-sm">Title</label>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded bg-[#0a0e1a] border border-[#1e3a8a] focus:border-[#00c8ff] transition text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 text-sm">Author</label>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded bg-[#0a0e1a] border border-[#1e3a8a] focus:border-[#00c8ff] transition text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#00c8ff] text-[#0a0e1a] rounded font-medium hover:opacity-90 transition"
            >
              Add Book
            </button>
          </form>
        </div>
      )}
      
      <div className="space-y-3 overflow-y-auto pb-20">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-[#111827] rounded-lg border border-[#1e3a8a] p-3">
            <div className="text-white font-medium">{book.title}</div>
            <div className="text-gray-400 text-sm">{book.author}</div>
            {role === 'admin' && (
              <div className="mt-2 flex space-x-3">
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
          <div className="text-center text-gray-400 py-8 bg-[#111827] rounded-lg border border-[#1e3a8a]">
            No books found. Try a different search term or add some books!
          </div>
        )}
      </div>
      
      {role === 'admin' && !showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="fixed bottom-4 right-4 bg-[#00c8ff] text-[#0a0e1a] w-12 h-12 rounded-full flex items-center justify-center shadow-lg md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      )}
      
      {role === 'admin' && !showAddForm && (
        <div className="mt-8 pt-5 border-t border-[#1e3a8a] hidden md:block">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[#00c8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <div className="text-[#00c8ff] font-medium">Add New Book</div>
          </div>
          <form onSubmit={addBook} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded bg-[#111827] border border-[#1e3a8a] focus:border-[#00c8ff] transition text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Author</label>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 rounded bg-[#111827] border border-[#1e3a8a] focus:border-[#00c8ff] transition text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#00c8ff] text-[#0a0e1a] rounded font-medium hover:opacity-90 transition"
            >
              Add Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
} 