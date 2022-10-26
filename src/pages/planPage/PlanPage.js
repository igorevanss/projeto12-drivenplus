import styled from 'styled-components'
import Forms from './Forms'
import logoPlan from '../../assets/images/logoplan.png'

export default function PlanPage() {
  return (
    <PlanContainer>
      <img src={logoPlan} alt="Driven Plus" />
      <h2>Driven Plus</h2>
      <div>
        <div>
          <img /> <p>Benefícios:</p>
        </div>
        <ol>
          <li>1. Brindes exclusivos</li>
          <li>2. Materiais bônus de web</li>
        </ol>
        <div>
          <img /> <p>Preco:</p>
        </div>
        <p>R$ 39,99 cobrados mensalmente</p>
      </div>
      <Forms />
    </PlanContainer>
  )
}

const PlanContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0e0e13;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
  }

  >div {
    margin-bottom: 34px;
  }

  >div > div:first-of-type {
    margin-bottom: 10px;
  }

  > div p,
  >div li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
`
