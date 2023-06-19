import styled from 'styled-components'

export const FooterContainer = styled.div`
  margin-top: 2rem;
  position: relative;

  &::after {
    content: 'Follow us on instagram @vashti';
    width: 380px;
    height: 80px;
    padding: 7px 68px;

    top: 250px;
    right: 580px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 2px;

    background: ${(props) => props.theme.white};
    color: black;

    position: absolute;

    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const FooterContent = styled.section`
  width: 100%;
`

export const ContentHeader = styled.header`
  width: 100%;
  height: 302px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  & > img {
    height: 302px;
    width: 302px;
    object-fit: cover;
  }
`

export const ContentFooter = styled.footer`
  width: 100%;
  height: 260px;
  background: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  color: ${(props) => props.theme['bege-pastel']};

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & > a {
      all: unset;
      font-weight: bold;
      cursor: pointer;
    }
  }
`
