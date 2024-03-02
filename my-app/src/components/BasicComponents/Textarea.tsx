import { FC } from 'react'
import * as styles from './BasicComponent.styles'
import { TextareaProps } from './BasicComponent.types'

const Textarea: FC<TextareaProps> = (props) => {
  const maxLength = props.maxLength ?? 300

  return (
    <textarea
      css={[styles.input, styles.textarea]}
      placeholder="Description"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      maxLength={maxLength}
    />
  )
}

export default Textarea
