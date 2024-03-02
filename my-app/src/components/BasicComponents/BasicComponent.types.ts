import { ReactNode } from 'react'

export type InputProps<T> = {
  placeholder?: string
  required?: boolean
  setValue: (val: T) => void
  type?: 'text' | 'number'
  value: T
}

export type TextareaProps = {
  placeholder?: string
  required?: boolean
  setValue: (s: string) => void
  value?: string
  maxLength?: number
}

export type ButtonProps = {
  children?: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}
