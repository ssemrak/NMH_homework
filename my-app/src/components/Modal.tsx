import React from 'react'
import * as styles from './Component.styles'
import { ModalProps } from './Components.types'

export default ({ book, onClose }: ModalProps) => (
  <div css={styles.modalOverlay} onClick={onClose}>
    <div css={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <h2 css={styles.headline}>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      {/* TODO Buttony tiez do zvlast componentu */}
      <button css={styles.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  </div>
)
