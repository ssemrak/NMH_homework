import { useState, FC, ChangeEvent } from 'react'
import { BookListProps, Book } from './Components.types'
import * as styles from './Component.styles'

const BookList: FC<BookListProps> = ({ books, onBookClick }) => {
  const [query, setQuery] = useState('')

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()),
  )

  const handleBookClick = (book: Book) => {
    onBookClick(book)
  }

  return (
    <div>
      <input
        css={styles.input}
        type="text"
        placeholder="Search by title"
        value={query}
        onChange={handleFilterChange}
      />
      <ul css={styles.list}>
        {filteredBooks.map((book, index) => (
          <li
            css={styles.listItem}
            key={index}
            onClick={() => handleBookClick(book)}
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
