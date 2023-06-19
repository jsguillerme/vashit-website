import { TShirt } from 'phosphor-react'
import {
  AboutUSContainer,
  AboutUSContent,
  AboutUSHeader,
  AboutUSMain,
  AboutUSMainContent,
} from './styles'

export function AboutUs() {
  return (
    <AboutUSContainer>
      <AboutUSContent>
        <AboutUSHeader>
          <h3>About Us</h3>
          <span>Order now and appreciate the beauty of nature</span>
        </AboutUSHeader>

        <AboutUSMain>
          <AboutUSMainContent>
            <div>
              <TShirt size={32} />
            </div>
            <h2>Large Assortment</h2>
            <span>
              we offer many different types of products with fewer variations in
              each category.
            </span>
          </AboutUSMainContent>
          <AboutUSMainContent>
            <div>
              <TShirt size={32} />
            </div>
            <h2>Large Assortment</h2>
            <span>
              we offer many different types of products with fewer variations in
              each category.
            </span>
          </AboutUSMainContent>
          <AboutUSMainContent>
            <div>
              <TShirt size={32} />
            </div>
            <h2>Large Assortment</h2>
            <span>
              we offer many different types of products with fewer variations in
              each category.
            </span>
          </AboutUSMainContent>
        </AboutUSMain>
      </AboutUSContent>
    </AboutUSContainer>
  )
}
