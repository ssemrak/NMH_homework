import { useState, FC } from 'react'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Modal from './components/Modal'
import { type Book } from './components/Components.types'
import * as styles from './App.styles'
import Generator from './components/Generator'

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
      <div css={styles.rightPane}>
        <BookList books={books} onBookClick={handleBookClick} />
      </div>
      {selectedBook && <Modal book={selectedBook} onClose={closeModal} />}
    </div>
  )
}

export default App
