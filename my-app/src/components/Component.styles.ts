import { css } from '@emotion/react'

export const form = css`
  display: flex;
  flex-direction: column;
`

export const list = css`
  height: calc(100% - 40px);
  overflow: auto;
  list-style-type: none;
  padding: 0;
`

export const listItem = css`
  background-color: #f0f0f0;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const modalContent = css`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`

export const headline = css`
  margin-top: 0;
`

export const closeButton = css`
  margin-top: 10px;
`
