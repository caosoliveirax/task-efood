import type { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  children: ReactNode
  title: string
  to?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({ title, type, children, to, onClick, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        title={title}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
