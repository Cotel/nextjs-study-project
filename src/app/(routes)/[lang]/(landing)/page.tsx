import { Container } from '@radix-ui/themes'
import { Footer } from '@ui/components/shared/organisms/Footer/Footer'
import { Hero } from '@ui/components/shared/organisms/Hero/Hero'
import { NavBar } from '@ui/components/shared/organisms/NavBar/NavBar'
import { ProductListContainer } from '@ui/components/shared/organisms/ProductListContainer/ProductListContainer'

const LandingPage = async () => {
  return (
    <>
      <NavBar />

      <main>
        <h1>Buy, Sell, Play!!!</h1>

        <Hero />

        <Container m="4">
          <ProductListContainer />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default LandingPage
