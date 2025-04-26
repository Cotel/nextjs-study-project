'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/') 
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="mainContainer">
      <h1 className="text">¡Pago exitoso!</h1>
    </div>
  )
}
