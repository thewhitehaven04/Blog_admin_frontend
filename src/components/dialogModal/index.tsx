import { type IDialogModalProps } from 'Components/dialogModal/types'
import { useEffect, useRef } from 'react'

// wip 
export const Modal = ({ text, setShow }: IDialogModalProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (setShow) {
      dialog?.show()
    } else {
      dialog?.close()
    }
  }, [setShow])

  return (
    <dialog ref={dialogRef}>
      <p>{text}</p>
    </dialog>
  )
}
