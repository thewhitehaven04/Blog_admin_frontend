import React, { SyntheticEvent, useState } from 'react'

export const SenderForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
): JSX.Element => {
  const { children, onSubmit } = props

  const [object, setObject] = useState({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    onSubmit != null && onSubmit(e)
  }

  const handleInput = (e: React.SyntheticEvent<HTMLFormElement, InputEvent>): void => {
    const { name, nodeValue } = e.target
    setObject((obj) => {
      return {
        ...obj,
        name: nodeValue
      }
    })
  }

  return (
    <form onClick={handleSubmit} onInput={handleInput} {...props}>
      {children}
    </form>
  )
}
