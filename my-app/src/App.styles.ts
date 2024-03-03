import { css } from '@emotion/react'

export const leftPane = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const appStyle = css`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin: auto;

  h2 {
    font-weight: 500;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
