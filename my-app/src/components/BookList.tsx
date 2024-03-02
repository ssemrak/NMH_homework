import { useState, FC } from 'react'
import { BookListProps, Book } from './Components.types'
import * as styles from './Component.styles'
import Input from './BasicComponents/Input'

const BookList: FC<BookListProps> = (props) => {
  const [query, setQuery] = useState<string>('')

  const filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()),
  )

  const handleBookClick = (book: Book) => {
    props.onBookClick(book)
  }

  return (
    <>
      {/*  TODO spravit infinite scroll pre vela zaznamov */}
      <Input
        placeholder="Search by title"
        required={true}
        setValue={setQuery}
        value={query}
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
    </>
  )
}

export default BookList
