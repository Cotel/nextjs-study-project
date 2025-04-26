// app/api/create-checkout-session/route.ts
import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { title, details, price } = body

  const priceNumber = parseFloat(String(price).replace(',', '.'))

  if (isNaN(priceNumber)) {
    return NextResponse.json({ error: 'Precio no válido' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: title,
              description: `${details}`,
            },
            unit_amount: Math.round(priceNumber * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/en/success`,
      cancel_url: `${req.nextUrl.origin}/en/cancel`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Stripe error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
