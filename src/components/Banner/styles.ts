import styled from 'styled-components'

export const BannerContainer = styled.section`
  height: 620px;

  padding: 2rem 4.5rem;
  background: ${(props) => props.theme['bege-pastel']};
`

export const BannerContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
`
export const BannerText = styled.div`
  height: 100%;

  flex: 2;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > h1 {
    font-size: 4rem;
    font-family: 'Baloo 2', monospace;
    line-height: 120%;
  }

  & > span {
    font-family: 'Baloo 2', monospace;
    line-height: 120%;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const BannerImg = styled.div`
  flex: 1;
  position: relative;

  & > img {
    object-fit: contain;
    width: 500px;
    height: 540px;
  }

  & > span:nth-child(2) {
    position: absolute;
    width: 120%;
    top: 10px;
    right: -60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      gap: 18rem;
    }

    gap: 4rem;
  }
`
export const BannerButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['gray-600']};
  color: white;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.5);
    transition: filter 0.5s;
  }
`
