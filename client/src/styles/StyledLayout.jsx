import styled from "styled-components"

export const StyledFlex = styled.div`
  margin-top: 0;
  height: 80%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
`

export const Header = styled.header`
 width: 100%;
 height: 20%;
 background-color: #50924E;
 position: relative;
 overflow: hidden;
`

export const Body = styled.main`
 width: 100%;
 height: 80%;
 background-color: #ffffff;
 border-radius: 4rem 4rem 0 0;
  padding: 1rem;
  position: relative;
  top: -5rem;
  left: 0;
  z-index: 2;
`

export const StyledLayout = ({ headerContent, bodyContent }) => {
  return(
    <Layout>
      <Header>{headerContent}</Header>
      <Body>{bodyContent}</Body>
    </Layout>
  )
}