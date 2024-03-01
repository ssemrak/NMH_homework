import { useState, FC } from 'react'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Modal from './components/Modal'
import { type Book } from './components/Components.types'
import * as styles from './App.styles'

const App: FC = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const addBook = (book: Book) => {
    setBooks([...books, book])
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
        <BookForm onAddBook={addBook} />
      </div>
      <div css={styles.rightPane}>
        <BookList books={books} onBookClick={handleBookClick} />
      </div>
      {selectedBook && <Modal book={selectedBook} onClose={closeModal} />}
    </div>
  )
}

export default App
