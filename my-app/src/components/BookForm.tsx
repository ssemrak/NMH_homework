import React, { FormEvent, useState } from 'react'
import * as styles from './Component.styles'
import Input from './BasicComponents/Input'
import Textarea from './BasicComponents/Textarea'
import { BookFormProps } from './Components.types'
import Button from './BasicComponents/Button'

const BookForm = ({ onAddBooks }: BookFormProps) => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const book = { title, author, description }
    onAddBooks([book])
    setTitle('')
    setAuthor('')
    setDescription('')
  }

  return (
    <form css={styles.form} onSubmit={handleSubmit}>
      <Input<string>
        placeholder="Title"
        required={true}
        setValue={setTitle}
        value={title}
      />

      <Input<string> placeholder="Author" setValue={setAuthor} value={author} />

      <Textarea
        placeholder="Description"
        setValue={setDescription}
        value={description}
      />

      <Button>Add Book</Button>
    </form>
  )
}

export default BookForm
