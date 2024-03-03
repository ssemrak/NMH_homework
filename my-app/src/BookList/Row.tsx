import { FC } from 'react'
import * as styles from './BookList.styles'
import { RowProps } from './BookList.types'

const Row: FC<RowProps> = ({ style, book, onClickCallback }) => (
  <div style={style}>
    <div onClick={() => onClickCallback(book)} css={styles.listItem}>
      {book.title}
    </div>
  </div>
)
export default Row
