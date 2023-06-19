import {
  ContentFooter,
  ContentHeader,
  FooterContainer,
  FooterContent,
} from './styles'

import modelImg1 from '../../assets/model1footer.png'
import modelImg2 from '../../assets/model2footer.png'
import modelImg4 from '../../assets/model4footer.png'
import modelImg5 from '../../assets/model5footer.png'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <ContentHeader>
          <img src={modelImg1} alt="" />
          <img src={modelImg2} alt="" />
          <img src={modelImg4} alt="" />
          <img src={modelImg5} alt="" />
          <img src={modelImg1} alt="" />
          <img src={modelImg2} alt="" />
        </ContentHeader>
        <ContentFooter>
          <span>
            <a href="#">COLLECTIONS</a>
            <a href="#">TRENDS</a>
            <a href="#">ABOUT US</a>
            <a href="#">WOMAN</a>
          </span>
          <p>Maracanaú, CE - 2023</p>
        </ContentFooter>
      </FooterContent>
    </FooterContainer>
  )
}
