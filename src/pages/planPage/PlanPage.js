import styled from 'styled-components'
import Forms from './Forms'
import Modal from './Modal'
import taskList from '../../assets/images/task-list.png'
import money from '../../assets/images/money.png'
import { useParams } from 'react-router-dom'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext'

export default function PlanPage() {
  const [plan, setPlan] = useState([])
  const { idPlan } = useParams()
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`,
        { headers: { Authorization: `Bearer ${auth}` } }
      )
      .then(res => setPlan(res.data))
      .catch(res => console.log(res.response.data.message))
  }, [])

  return (
    <PlanContainer>
      {/* {showModal? <Modal />: ''} */}
      <img src={plan.image} alt="Driven Plus" />
      <h2>{plan.name}</h2>
      <div>
        <div>
          <img src={taskList} /> <p>Benefícios:</p>
        </div>
        <ol>
          {plan.perks ?
          plan.perks.map((b, index) => (
            <li key={index}>
              <a href={b.link}>{index+1}. {b.title}</a>
            </li>
          )): ""}
        </ol>
        <div>
          <img src={money} /> <p>Preco:</p>
        </div>
        <p>R$ {plan.price} cobrados mensalmente</p>
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
    margin-bottom: 22px;
  }

  > div {
    margin-bottom: 34px;
  }

  > div > p {
    margin-left: -3px;
  }

  > div > div {
    display: flex;
    align-items: center;
  }

  > div > div:first-of-type, >div > ol {
    margin-bottom: 10px;
  }

  > div > div:first-of-type > img {
    margin-left: -5px;
  }

  > div > div:last-of-type > img {
    margin-left: -2px;
    margin-right: 4px;
  }

  > div > div:last-of-type {
    margin-bottom: 4px;
  }

  > div p,
  > div li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
`
