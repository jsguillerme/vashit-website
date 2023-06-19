import styled from 'styled-components'

export const HighlightsContainer = styled.section`
  padding: 2.5rem 7.5rem;
`

export const HighlightsHeader = styled.header`
  width: 100%;
  padding: 2.5rem 7.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h2 {
    font-size: 3rem;
    line-height: 130%;
  }

  & > span {
    font-size: 1.2rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const HighlightsImages = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.5rem;

  & > img {
    position: absolute;
    left: -30px;
  }

  & > ul {
    width: 100%;
    max-width: 1120px;
    gap: 10rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: relative;

    & > li {
      all: unset;
      position: relative;

      &::after {
        content: 'VERÃO';
        bottom: 30px;
        right: 15px;
        width: 150px;
        height: 35px;
        padding: 7px 68px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 2px;

        background: ${(props) => props.theme.white};
        color: black;

        position: absolute;

        font-size: 2rem;
        font-family: 'Frank Ruhl Libre', serif;
      }
    }

    & > li > img {
      object-fit: cover;
      width: 320px;
      height: 360px;

      opacity: 0.8;
      box-shadow: 2px 4px 12px ${(props) => props.theme['gray-400']};
    }
  }
`
