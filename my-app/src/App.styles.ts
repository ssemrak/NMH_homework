import { css } from '@emotion/react'

/*  TODO krajsie stylovanie */

export const leftPane = css`
  flex: 1 1 auto;
  padding: 20px;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const rightPane = css`
  flex: 1 1 auto;
  padding: 20px;
  height: 100%;

  /*  TODO list aj pre malu obrazovku*/
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const testButtons = css`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`

export const appStyle = css`
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
