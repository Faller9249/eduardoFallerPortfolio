import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}

export type Caractere = RegExp | string

export type Options = {
  value: unknown
  label: string
}
