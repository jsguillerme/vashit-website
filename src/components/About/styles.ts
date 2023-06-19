import styled from 'styled-components'

export const AboutUSContainer = styled.div`
  padding: 2.5rem 7.5rem;
`
export const AboutUSContent = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > div > h3 {
    font-size: 3rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
  }

  & > div > span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const AboutUSHeader = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h3 {
    font-size: 3rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
    margin-bottom: 0.75rem;
  }

  & > span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const AboutUSMain = styled.main`
  width: 100%;
  max-width: 1820px;
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export const AboutUSMainContent = styled.div`
  max-width: 390px;
  height: 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  text-align: center;

  & > div {
    width: 96px;
    height: 92px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: pink;

    padding: 1.25rem;
    border-radius: 999px;
  }

  & > h2 {
    line-height: 130%;
    font-size: 1.5rem;
    font-family: 'Baloo 2', monospace;
    color: ${(props) => props.theme['gray-700']};
  }

  & > span {
    font-family: 'Baloo 2', monospace;
    color: ${(props) => props.theme['gray-500']};
  }
`
