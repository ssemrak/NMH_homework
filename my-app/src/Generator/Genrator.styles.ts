import { css } from '@emotion/react'

export const generator = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  @media (max-width: 576px) {
    display: none;
  }
`
