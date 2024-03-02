export type Book = {
  title: string
  author: string
  description: string
}

export type ModalProps = {
  book: Book
  onClose: () => void
}

export type BookListProps = {
  books: Book[]
  onBookClick: (book: Book) => void
}

export type BookFormProps = {
  onAddBooks: onAddBookType
}

export type GeneratorProps = {
  onAddBooks: onAddBookType
}

export type onAddBookType = (newBooks: Array<Book>) => void
