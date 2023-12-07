export interface IDialogModalProps {
  title: string
  text: string
  acceptCallback?: () => void
  declineCallback?: () => void
}