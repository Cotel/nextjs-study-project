import { NavBar } from '@/shared/components/organisms/NavBar/NavBar'
import { Container } from '@radix-ui/themes'
import React from 'react'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />

      <Container mt="6" px="4">
        {children}
      </Container>
    </>
  )
}
