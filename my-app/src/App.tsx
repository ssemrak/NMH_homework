import { useState, FC } from 'react'
import BookForm from './BookForm/BookForm'
import BookList from './BookList/BookList'
import Modal from './Modal/Modal'
import { type Book } from './BookForm/BookForm.types'
import * as styles from './App.styles'
import Generator from './Generator/Generator'

const App: FC = () => {
  const [books, setBooks] = useState<Array<Book>>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const addBooks = (newBooks: Array<Book>) => {
    setBooks([...books, ...newBooks])
  }

  const handleBookClick = (book: Book) => {
    setSelectedBook(book)
  }

  const closeModal = () => {
    setSelectedBook(null)
  }

  return (
    <div css={styles.appStyle}>
      <div css={styles.leftPane}>
        <BookForm onAddBooks={addBooks} />
        <Generator onAddBooks={addBooks} />
      </div>

      <BookList books={books} onBookClick={handleBookClick} />

      {selectedBook && <Modal book={selectedBook} onClose={closeModal} />}
    </div>
  )
}

export default App
