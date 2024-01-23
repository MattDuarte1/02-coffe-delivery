import { ReactNode } from 'react'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <SectionTitleContainer>
      {icon}

      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </SectionTitleContainer>
  )
}
