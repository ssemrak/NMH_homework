export type Book = {
  title: string
  author: string
  description: string
}

export type BookFormProps = {
  onAddBooks: onAddBookType
}

export type onAddBookType = (newBooks: Array<Book>) => void
