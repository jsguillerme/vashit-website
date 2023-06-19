import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerImg,
  BannerText,
} from './styles'

import bannerImg from '../../assets/imgBanner.png'
import detalheImg from '../../assets/DetalheBanner.svg'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>
          <h1>The Best Store To Shop Online All IN ONE</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            egestas orci quis mi convallis Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin egestas orci quis mi convallis
          </span>
          <BannerButton>COMPRAR AGORA</BannerButton>
        </BannerText>

        <BannerImg>
          <img src={bannerImg} alt="" />
          <span>
            <div>
              <img src={detalheImg} alt="" />
              <img src={detalheImg} alt="" />
            </div>
            <div>
              <img src={detalheImg} alt="" />
              <img src={detalheImg} alt="" />
            </div>
          </span>
        </BannerImg>
      </BannerContent>
    </BannerContainer>
  )
}
