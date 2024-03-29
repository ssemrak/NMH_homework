import { css } from '@emotion/react'

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
  z-index: 2;
`

export const loading = css`
  color: white;
`

export const modalContent = css`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  line-height: 1.3em;
  min-width: 50%;
`

export const headline = css`
  margin-top: 0;
`

export const closeButton = css`
  margin-top: 12px;
`
