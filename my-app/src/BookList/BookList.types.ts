import { type Book } from '../BookForm/BookForm.types'
import { ClassAttributes, HTMLAttributes } from 'react'
import { Interpolation } from '@emotion/styled'
import { Theme } from '@emotion/react'

export { Book }

export type BookListProps = {
  books: Book[]
  onBookClick: (book: Book) => void
}

export type RowProps = {
  book: Book
  onClickCallback: (book: Book) => void
  style: ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> & { css?: Interpolation<Theme> }
}
