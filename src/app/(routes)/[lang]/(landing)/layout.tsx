import { NavBar } from '@/shared/components/organisms/NavBar/NavBar'
import React from 'react'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />

      {children}
    </>
  )
}
