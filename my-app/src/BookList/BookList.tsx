import { useState, FC, useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import { BookListProps } from './BookList.types'
import * as styles from './BookList.styles'
import Input from '../BasicComponents/Input'
import Row from './Row'

const SEARCHBAR_HEIGHT_WITH_PADDING = 80
const BOOK_FORM_HEIGHT = 350
const MIN_HEIGHT = 350

const getHeight = (newHeight: number) => {
  return Math.max(newHeight, MIN_HEIGHT)
}

const BookList: FC<BookListProps> = ({ onBookClick, books }) => {
  const [query, setQuery] = useState<string>('')
  const [listHeight, setListHeight] = useState(
    getHeight(window.innerHeight / 2 - SEARCHBAR_HEIGHT_WITH_PADDING),
  )

  function handleResize() {
    const newHeight =
      window.innerWidth <= 576
        ? window.innerHeight - BOOK_FORM_HEIGHT
        : window.innerHeight - SEARCHBAR_HEIGHT_WITH_PADDING
    setListHeight(getHeight(newHeight))
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div css={styles.rightPane}>
      <Input
        css={styles.search}
        placeholder="Search by title"
        required={true}
        setValue={setQuery}
        value={query}
      />

      <FixedSizeList
        height={listHeight}
        width="100%"
        itemCount={filteredBooks.length}
        itemSize={50}
      >
        {({ index, style }) => (
          <Row
            book={filteredBooks[index]}
            style={style}
            onClickCallback={onBookClick}
          />
        )}
      </FixedSizeList>
    </div>
  )
}

export default BookList
