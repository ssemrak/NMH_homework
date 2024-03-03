import React from 'react'
import * as styles from './Modal.styles'

const Loading = () => (
  <div css={styles.modalOverlay}>
    <h2 css={styles.loading}>Creating books...</h2>
  </div>
)

export default Loading
