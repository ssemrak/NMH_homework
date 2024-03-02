import { css } from '@emotion/react'

export const input = css`
  margin: 8px 0;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const textarea = css`
  resize: vertical;
`

export const button = css`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
