import { Footer } from '@ui/components/shared/organisms/Footer/Footer'
import { Hero } from '@ui/components/shared/organisms/Hero/Hero'
import { NavBar } from '@ui/components/shared/organisms/NavBar/NavBar'
import { ProductListContainer } from '@ui/components/shared/organisms/ProductListContainer/ProductListContainer'

const LandingPage = async () => {
  return (
    <>
      <NavBar />  
      <h1>Buy, Sell, Play!!!</h1>
      <Hero/>  
      <ProductListContainer/>
      <Footer />
    </>
  )
}

export default LandingPage
