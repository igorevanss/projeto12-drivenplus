import styled from 'styled-components'
import Forms from './Forms'
import { Link } from 'react-router-dom'

export default function RegistrationPage() {
  return (
    <PageContainer>
      <Forms />
      <Link to={'/'}>
        <LoginLink>Já possuí uma conta? Entre</LoginLink>
      </Link>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0e0e13;
`
const LoginLink = styled.p`
  margin-top: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #ffffff;
`
