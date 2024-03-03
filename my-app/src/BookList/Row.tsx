import { FC } from 'react'
import * as styles from './BookList.styles'
import { RowProps } from './BookList.types'

const Row: FC<RowProps> = ({ style, book, callback, index }) => (
  <div style={style}>
    <div onClick={() => callback(book)} css={styles.listItem}>
      {index}. {book.title}
    </div>
  </div>
)
export default Row
