import { Book } from '../BookForm/BookForm.types'

export type ModalProps = {
  book: Book
  onClose: () => void
}

export type LoadingProps = {
  booksCount: number
}
