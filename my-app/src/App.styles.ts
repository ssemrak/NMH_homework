import { css } from '@emotion/react'

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
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const appStyle = css`
  display: flex;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input[type='text'],
  textarea {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #f0f0f0;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .modal-content h2 {
    margin-top: 0;
  }

  .modal-content button {
    margin-top: 10px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .modal-content button:hover {
    background-color: #0056b3;
  }
`
