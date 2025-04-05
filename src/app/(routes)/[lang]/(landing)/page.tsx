import { Container } from '@radix-ui/themes'
import { Hero } from '@ui/components/shared/organisms/Hero/Hero'
import { ProductListContainer } from '@ui/components/shared/organisms/ProductListContainer/ProductListContainer'

const LandingPage = async () => {
  return (
    <main>
      <h1>Buy, Sell, Play!!!</h1>

      <Hero />

      <Container m="4">
        <ProductListContainer />
      </Container>
    </main>
  )
}

export default LandingPage
