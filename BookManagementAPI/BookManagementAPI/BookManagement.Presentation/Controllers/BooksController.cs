using BookManagement.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using BookManagement.Business;

namespace BookManagement.Presentation.Controllers
{
    [Route("api/books")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookService _bookService;

        public BooksController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public ActionResult<List<Book>> Get()
        {
            return Ok(_bookService.GetAllBooks());
        }

        [HttpGet("{id:int}", Name = "GetBookById")]
        public ActionResult<Book> Get(int id)
        {
            var book = _bookService.GetBookById(id);

            if (book is null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Book book)
        {
            var createdBook = _bookService.AddBook(book);
            return CreatedAtRoute("GetBookById", new { id = createdBook.Id }, createdBook);
        }

        [HttpPut("{id:int}")]
        public ActionResult Put(int id, [FromBody] Book book)
        {
            var isUpdated = _bookService.UpdateBook(id, book);

            if (!isUpdated)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            var isDeleted = _bookService.DeleteBook(id);

            if (!isDeleted)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
