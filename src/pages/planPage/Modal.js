import styled from 'styled-components'
import close from '../../assets/images/close.png'

export default function Modal() {
  return (
    <ModalContainer>
    <img src={close} alt="Botão de Fechar"/>
      <div>
        <p>
          Tem certeza que deseja
          <br />
          assinar o plano
          <br />
          Driven Plus (R$ 39,99)?
        </p>
        <Buttons>
          <button>
            <p>Não</p>
          </button>
          <button>
            <p>SIM</p>
          </button>
        </Buttons>
      </div>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  position: fixed;

  > img {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  > div {
    width: 248px;
    height: 210px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 11px;
    padding-top: 34px;
  }

  > div > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #000000;
  }
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  > button {
    width: 95px;
    height: 52px;
    background: #cecece;
    border-radius: 8px;
    border: none;
  }

  > button p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  > button:last-of-type {
    background: #FF4791;
  }
`
