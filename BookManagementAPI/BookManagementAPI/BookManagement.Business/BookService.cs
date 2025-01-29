using BookManagement.Models.Entities;


namespace BookManagement.Business
{
    public class BookService
    {
        private readonly List<Book> _books;

        public BookService()
        {
            _books = new List<Book>
            {
                new Book { Id = 1, Title = "The Great Gatsby", Author = "F. Scott Fitzgerald", ISBN = "1234567890", PublicationDate = new DateTime(1925, 4, 10) },
                new Book { Id = 2, Title = "1984", Author = "George Orwell", ISBN = "0987654321", PublicationDate = new DateTime(1949, 6, 8) }
            };
        }

        public List<Book> GetAllBooks()
        {
            return _books;
        }

        public Book? GetBookById(int id)
        {
            return _books.FirstOrDefault(x => x.Id == id);
        }

        public Book AddBook(Book book)
        {
            book.Id = _books.Any() ? _books.Max(x => x.Id) + 1 : 1;
            _books.Add(book);
            return book;
        }

        public bool UpdateBook(int id, Book updatedBook)
        {
            var existingBook = _books.FirstOrDefault(x => x.Id == id);

            if (existingBook is null) return false;

            existingBook.Title = updatedBook.Title;
            existingBook.Author = updatedBook.Author;
            existingBook.ISBN = updatedBook.ISBN;
            existingBook.PublicationDate = updatedBook.PublicationDate;

            return true;
        }

        public bool DeleteBook(int id)
        {
            var book = _books.FirstOrDefault(x => x.Id == id);

            if (book is null) return false;

            _books.Remove(book);
            return true;
        }
    }
}
