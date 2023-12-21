import { Button } from 'Components/Common/Button/styles'
import {
  ModalHeader,
  ModalOverlay,
  ModalText,
  ModalTitle,
  ModalWrapper
} from 'Components/Common/Modal/styles'
import { type IDialogModalProps } from 'Components/Common/Modal/types'
import { Row } from '../Row/styles'
import { Column } from '../Column/styles'
import { Icon } from 'Components/Common/Icon/styles'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
          <ModalHeader>
            <Row $justify='between' $alignment='center'>
              <ModalTitle>{title}</ModalTitle>
              <Button>
                <Icon icon={faXmark} onClick={closeCallback} />
              </Button>
            </Row>
          </ModalHeader>
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
