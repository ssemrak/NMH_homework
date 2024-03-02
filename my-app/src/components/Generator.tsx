import { FC, useState } from 'react'
import { faker } from '@faker-js/faker'
import * as styles from '../App.styles'
import Input from './BasicComponents/Input'
import Button from './BasicComponents/Button'
import type { Book, GeneratorProps } from './Components.types'

const Generator: FC<GeneratorProps> = (props: GeneratorProps) => {
  const [countToGenerate, setCountToGenerate] = useState<number>(1)

  const generate = () => {
    console.log('generujem', countToGenerate)
    const newBooks: Array<Book> = []
    console.log(Array(countToGenerate))
    console.log(Array(countToGenerate).keys())
    console.log(Array.from(Array(countToGenerate).keys()))
    Array.from(Array(countToGenerate).keys()).forEach(() => {
      newBooks.push({
        author: faker.person.fullName(),
        title: faker.commerce.productName(),
        description: faker.lorem.text(),
      })
    })
    props.onAddBooks(newBooks)
  }

  return (
    <div css={styles.testButtons}>
      <Input<number>
        type="number"
        value={countToGenerate}
        setValue={(val: number) => {
          console.log(val)
          console.log(val + 1)
          setCountToGenerate(val)
        }}
      />
      <Button onClick={generate}>Generate book</Button>
    </div>
  )
}

export default Generator
