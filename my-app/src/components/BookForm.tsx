import { useState } from 'react'
import * as styles from './Component.styles'

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const book = { title, author, description }
    onAddBook(book)
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  return (
    <form css={styles.form} onSubmit={handleSubmit}>
      <input
        css={styles.input}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        css={styles.input}
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        css={[styles.input, styles.textarea]}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={300}
      />
      <button css={styles.submitButton} type="submit">
        Add Book
      </button>
    </form>
  )
}

export default BookForm
