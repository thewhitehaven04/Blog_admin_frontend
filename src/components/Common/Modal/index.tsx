import { Button } from 'Components/Common/Button/styles'
import { CardWrapper } from 'Components/Common/CardWrapper'
import {
  ModalOverlay,
  ModalText,
  ModalTitle,
  ModalWrapper
} from 'Components/Common/Modal/styles'
import { type IDialogModalProps } from 'Components/Common/Modal/types'
import { Column, Row } from 'Components/Styles/Common'

export const Modal = ({
  title,
  text,
  accept: acceptCallback,
  decline: declineCallback,
  close: closeCallback
}: IDialogModalProps): JSX.Element => {
  const handleAccept = (): void => {
    if (acceptCallback != null) {
      acceptCallback()
    }
  }

  const handleDecline = (): void => {
    if (declineCallback != null) {
      declineCallback()
    }
  }

  return (
    <ModalOverlay>
      <ModalWrapper>
          <Column>
            <Row $justify='between'>
              <ModalTitle>{title}</ModalTitle>
              <Button type='button' onClick={closeCallback}>
                X
              </Button>
            </Row>
            <ModalText>{text}</ModalText>
            <Row $justify='evenly'>
              {acceptCallback != null && (
                <Button type='button' onClick={handleAccept}>
                  Accept
                </Button>
              )}
              {declineCallback != null && (
                <Button type='button' onClick={handleDecline}>
                  Decline
                </Button>
              )}
            </Row>
          </Column>
      </ModalWrapper>
    </ModalOverlay>
  )
}
