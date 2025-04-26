'use client'
import { useState } from 'react'
import styles from './BuyButton.module.scss'

export default function BuyButton({title, details, price }: {title: string, details:string, price: number }) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({price, details, title }),
      })

      const data = await res.json()
      if (data?.url) {
        window.location.href = data.url
      } else {
        console.error('Stripe checkout URL not found.')
      }
    } catch (err) {
      console.error('Checkout error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button className={styles['buy-button']}onClick={handleCheckout} disabled={loading}>
      BUY
    </button>
  )
}
