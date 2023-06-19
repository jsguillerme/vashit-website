import { AboutUs } from '../../components/About'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Highlights } from '../../components/Highlights/Index'

export function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Highlights />
      <AboutUs />
      <Footer />
    </div>
  )
}
