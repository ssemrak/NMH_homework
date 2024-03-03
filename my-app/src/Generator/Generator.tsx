import { FC, useState } from 'react'
import { faker } from '@faker-js/faker'
import * as styles from './Genrator.styles'
import Input from '../BasicComponents/Input'
import Button from '../BasicComponents/Button'
import type { Book, GeneratorProps } from './Generator.types'
import Loading from '../Modal/Loading'
import { MAX_CHAR_LENGTH } from '../BookForm/BookForm'

const MAX_FAKER_BOOKS = 9999

const getBooksCountToGenarate = (count: number) => {
  return Math.min(count, MAX_FAKER_BOOKS)
}

const fakeBook = () => {
  return {
    author: faker.person.fullName(),
    description: faker.lorem.sentences(3).substring(0, MAX_CHAR_LENGTH),
    title: faker.commerce.productName(),
  }
}

const quickBook = {
  author: 'Simple author',
  description: 'Simple desc',
  title: 'Simple title',
}

const Generator: FC<GeneratorProps> = ({ onAddBooks }) => {
  const [countToGenerate, setCountToGenerate] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)

  const generate = (quick: boolean = false) => {
    !quick && setCountToGenerate(getBooksCountToGenarate(countToGenerate))
    setLoading(true)

    setTimeout(() => {
      const newBooks: Array<Book> = []
      Array.from(
        Array(getBooksCountToGenarate(countToGenerate)).keys(),
      ).forEach(() => {
        newBooks.push(quick ? quickBook : fakeBook())
      })
      onAddBooks(newBooks)
      setLoading(false)
    }, 1)
  }

  return (
    <div css={styles.generator}>
      {loading && (
        <Loading booksCount={getBooksCountToGenarate(countToGenerate)} />
      )}

      <h4>For testing</h4>

      <Input<number>
        type="number"
        value={countToGenerate}
        setValue={(val: number) => {
          setCountToGenerate(val)
        }}
      />

      <Button onClick={() => generate()}>
        Generate random books (max {MAX_FAKER_BOOKS})
      </Button>

      <Button onClick={() => generate(true)}>Generate simple books</Button>
    </div>
  )
}

export default Generator
