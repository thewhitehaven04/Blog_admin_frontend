export interface IDialogModalProps {
  title: string
  text: string
  close: () => void
  accept?: () => void
  decline?: () => void
}