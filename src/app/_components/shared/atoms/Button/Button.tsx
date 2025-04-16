import { ReactNode } from 'react'
import { classNames } from '../../../../_styles/classNames'
import styles from './Button.module.scss'

export interface ButtonProps {
  variant?: 'solid' | 'transparent' | 'outline'
  children: ReactNode
}

export const Button = ({ children, variant = 'solid' }: ButtonProps) => {
  return (
    <button
      className={classNames(styles['button'], styles[`button--${variant}`])}
    >
      <span className={styles['button__content']}>{children}</span>
    </button>
  )
}
