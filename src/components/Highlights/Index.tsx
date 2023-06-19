import {
  HighlightsContainer,
  HighlightsHeader,
  HighlightsImages,
} from './styles'

import modelImg1 from '../../assets/model1.png'
import modelImg2 from '../../assets/model2.png'
import modelImg3 from '../../assets/model3.png'
import detalheBanner from '../../assets/DetalheBanner.svg'

export function Highlights() {
  return (
    <HighlightsContainer>
      <HighlightsHeader>
        <h2>New Collections</h2>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
          orci quis mi convallis
        </span>
      </HighlightsHeader>

      <HighlightsImages>
        <img src={detalheBanner} alt="" />

        <ul>
          <li>
            <img src={modelImg3} alt="" />
          </li>
          <li>
            <img src={modelImg1} alt="" />
          </li>
          <li>
            <img src={modelImg2} alt="" />
          </li>
        </ul>
      </HighlightsImages>
    </HighlightsContainer>
  )
}
