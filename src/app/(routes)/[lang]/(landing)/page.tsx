import { ProductGenreSelector } from '@ui/components/shared/molecules/ProductGenreSelector/ProductGenreSelector'
import { SearchBar } from '@ui/components/shared/molecules/SearchBar/SearchBar'
import { Footer } from '@ui/components/shared/organisms/Footer/Footer'
import { Hero } from '@ui/components/shared/organisms/Hero/Hero'
import { NavBar } from '@ui/components/shared/organisms/NavBar/NavBar'
import { ProductList } from '@ui/components/shared/organisms/ProductList/ProductList'

const LandingPage = async () => {
  return (
    <>
      <NavBar />  
      <h1>Buy, Sell, Play</h1>
      <Hero />  
      <SearchBar/>
      <ProductGenreSelector/>
      <ProductList/>
      <Footer />
    </>
  )
}

export default LandingPage
