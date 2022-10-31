import styled from 'styled-components'
import close from '../../assets/images/close.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import PlanContext from '../../contexts/Userplan'
import { useState, useEffect, useContext } from 'react'

export default function Modal({ setShowModal, form, plan }) {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)
  const { setUserPlan } = useContext(PlanContext)

  function sendForm() {
    console.log(form)
    axios
      .post(
        'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',
        form,
        { headers: { Authorization: `Bearer ${auth}` } }
      )
      .then(res => {
        setUserPlan(res.data)
        console.log(res.data)
        navigate('/home')
      })
      .catch(res => {
        alert(res.response.data.message)
      })
  }

  return (
    <ModalContainer>
      <img
        onClick={() => setShowModal(false)}
        src={close}
        alt="Botão de Fechar"
      />
      <div>
        <ConfirmationP>
          Tem certeza que deseja
          <br />
          assinar o plano
          <br />
          {plan.name} ({plan.price})?
        </ConfirmationP>
        <Buttons>
          <button onClick={() => setShowModal(false)}>
            <p>Não</p>
          </button>
          <button onClick={sendForm}>
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
  color: #000000;

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
    color: #000000;
  }

  > div > p {
  }
`

const ConfirmationP = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #000000;
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
    background: #ff4791;
  }
`
