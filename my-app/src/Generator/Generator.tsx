import { FC, useState } from 'react'
import { faker } from '@faker-js/faker'
import * as styles from './Genrator.styles'
import Input from '../BasicComponents/Input'
import Button from '../BasicComponents/Button'
import type { Book, GeneratorProps } from './Generator.types'
import Loading from '../Modal/Loading'

const MAX_FAKER_BOOKS = 9999

const Generator: FC<GeneratorProps> = (props: GeneratorProps) => {
  const [countToGenerate, setCountToGenerate] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)

  const generate = () => {
    setLoading(true)
    setTimeout(() => {
      const newBooks: Array<Book> = []
      Array.from(
        Array(
          countToGenerate > MAX_FAKER_BOOKS ? MAX_FAKER_BOOKS : countToGenerate,
        ).keys(),
      ).forEach(() => {
        newBooks.push({
          author: faker.person.fullName(),
          title: faker.commerce.productName(),
          description: faker.lorem.sentences(3).substring(0, 300),
        })
      })
      props.onAddBooks(newBooks)
      setLoading(false)
    }, 1000)
  }

  const quick = () => {
    setLoading(true)
    const newBooks: Array<Book> = []
    Array.from(Array(countToGenerate).keys()).forEach(() => {
      newBooks.push({
        author: 'Quick author',
        description: 'Short desc',
        title: 'Quick title',
      })
    })
    props.onAddBooks(newBooks)
    setLoading(false)
  }

  return (
    <div css={styles.testButtons}>
      {loading && <Loading />}

      <h4>For testing</h4>

      <Input<number>
        type="number"
        value={countToGenerate}
        setValue={(val: number) => {
          setCountToGenerate(val)
        }}
      />

      <Button onClick={generate}>
        Generate random books (max {MAX_FAKER_BOOKS})
      </Button>

      <Button onClick={quick}>Quick generate</Button>
    </div>
  )
}

export default Generator
