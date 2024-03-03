import React, { FC, MouseEvent, useState } from 'react'
import * as styles from './BookForm.styles'
import Input from '../BasicComponents/Input'
import Textarea from '../BasicComponents/Textarea'
import { BookFormProps } from './BookForm.types'
import Button from '../BasicComponents/Button'

const BookForm: FC<BookFormProps> = ({ onAddBooks }) => {
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [author, setAuthor] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSubmit = (e: MouseEvent) => {
    if (!title) {
      setError(true)
      return
    }
    e.preventDefault()
    const book = { title, author, description }
    onAddBooks([book])
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  return (
    <div css={styles.form}>
      <Input<string>
        placeholder="Title *"
        required={true}
        error={error}
        setValue={(val) => {
          setTitle(val)
          setError(!val)
        }}
        value={title}
      />

      <Input<string> placeholder="Author" setValue={setAuthor} value={author} />

      <Textarea
        placeholder="Description"
        setValue={setDescription}
        value={description}
      />

      <Button onClick={handleSubmit}>Add Book</Button>
    </div>
  )
}

export default BookForm
