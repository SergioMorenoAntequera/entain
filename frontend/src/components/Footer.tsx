import styled from 'styled-components'
import Container from './Container'

const FooterBg = styled.footer`
  width: 100%;
  background: #181c24;
  padding: 0;
  margin: 0;
  min-height: 56px;
  display: flex;
`

function Footer() {
  return (
    <FooterBg>
      <Container style={{ display: 'flex', alignItems: 'center', height: '56px', color: '#fff' }}>
        Created by Sergio Moreno Antequera
      </Container>
    </FooterBg>
  )
}

export default Footer