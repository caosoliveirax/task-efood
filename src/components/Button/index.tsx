import type { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  children: ReactNode
  title: string
  to?: string
  onClick?: () => void
}

const Button = ({ title, type, children, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
