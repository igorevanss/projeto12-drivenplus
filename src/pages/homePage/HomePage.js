import styled from 'styled-components'
import userPic from '../../assets/images/user-pic.png'

export default function HomePage() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <img /> <img src={userPic} alt="usuário" />
      </HeaderContainer>
      <h2>Olá, fulano</h2>
      <BenefitsButtons>
        <button>
          <p>Solicitar brindes</p>
        </button>
        <button>
          <p>Materiais bônus de web</p>
        </button>
      </BenefitsButtons>
      <FooterButtons>
        <button>
          <p>Mudar plano</p>
        </button>
        <button>
          <p>Cancelar plano</p>
        </button>
      </FooterButtons>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #0e0e13;

  > h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
    margin-top: 12px;
  }
`
const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0px 22px;
  padding-top: 22px;

  > img:first-of-type {
    width: 74.52px;
  }

  > img:last-of-type {
    width: 34px;
    height: 34px;
  }
`

const BenefitsButtons = styled.div`
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  > button {
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    border: none;
  }

  > button > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    color: #ffffff;
  }
`

const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  position: fixed;
  bottom: 12px;

  > button {
    width: 299px;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    border: none;
  }

  > button:last-of-type {
    background: #ff4747;
  }

  > button > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
`
