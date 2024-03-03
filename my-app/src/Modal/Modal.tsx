import React, { FC } from 'react'
import * as styles from './Modal.styles'
import { ModalProps } from './Modal.types'
import Button from '../BasicComponents/Button'

const Modal: FC<ModalProps> = ({ book, onClose }) => (
  <div css={styles.modalOverlay} onClick={onClose}>
    <div css={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <h2 css={styles.headline}>{book.title}</h2>
      <p>
        <strong>Author: </strong>
        {book.author}
      </p>
      <p>
        <strong>Description: </strong> {book.description}
      </p>

      <Button css={styles.closeButton} onClick={onClose}>
        Close
      </Button>
    </div>
  </div>
)

export default Modal
