import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 7.5rem;
  background: ${(props) => props.theme['bege-pastel']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLinksContainer = styled.div`
  width: 430px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  & > a {
    all: unset;
    font-weight: bold;
    line-height: 130%;
  }
`

export const HeaderActionsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`
