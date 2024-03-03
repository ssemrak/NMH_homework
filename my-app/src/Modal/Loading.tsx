import React, { FC } from 'react'
import * as styles from './Modal.styles'
import { LoadingProps } from './Modal.types'

const Loading: FC<LoadingProps> = ({ booksCount }) => (
  <div css={styles.modalOverlay}>
    <h2 css={styles.loading}>Creating {booksCount} books...</h2>
  </div>
)

export default Loading
