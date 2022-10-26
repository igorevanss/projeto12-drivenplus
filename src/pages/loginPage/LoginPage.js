import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Forms from './Forms'
import logo from '../../assets/images/Driven_white.png'

export default function LoginPage(params) {
  return (
    <PageContainer>
    <img src={logo} alt="Driven Plus" />
      <Forms />
      <Link to={"/sign-up"}>
      <RegistrationLink>Não possuí uma conta? Cadastre-se</RegistrationLink>
      </Link>
    </PageContainer>
  )
};

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0e0e13;

  img {
    margin-bottom: 101px;
  }
`
const RegistrationLink = styled.p`
  margin-top: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #ffffff;
`