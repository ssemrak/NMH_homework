import { css } from '@emotion/react'

export const listItem = css`
  background-color: #f0f0f0;
  padding: 8px 8px 8px 16px;
  border-radius: 4px;
  margin: 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const search = css`
  width: 100%;
`

export const rightPane = css`
  flex: 1 1 auto;
  padding: 20px;

  @media (max-width: 576px) {
    width: 100%;
  }
`
