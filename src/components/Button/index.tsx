import type { ReactNode } from 'react'
import * as S from './styles'

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
      <S.ButtonContainer
        title={title}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
}

export default Button
