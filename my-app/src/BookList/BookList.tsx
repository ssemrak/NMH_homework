import { useState, FC, useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import { BookListProps } from './BookList.types'
import * as styles from './BookList.styles'
import Input from '../BasicComponents/Input'
import Row from './Row'

const SEARCHBOX_HEIGHT_WITH_PADDING = 80

const BookList: FC<BookListProps> = (props) => {
  const [query, setQuery] = useState<string>('')
  const [listHeight, setListHeight] = useState(
    window.innerHeight / 2 - SEARCHBOX_HEIGHT_WITH_PADDING,
  )

  function handleResize() {
    const newHeight =
      window.innerWidth <= 576
        ? window.innerHeight / 2 - SEARCHBOX_HEIGHT_WITH_PADDING
        : window.innerHeight - SEARCHBOX_HEIGHT_WITH_PADDING
    setListHeight(newHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const filteredBooks = props.books.filter((book) =>
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
            index={index}
            book={filteredBooks[index]}
            style={style}
            callback={props.onBookClick}
          />
        )}
      </FixedSizeList>
    </div>
  )
}

export default BookList
