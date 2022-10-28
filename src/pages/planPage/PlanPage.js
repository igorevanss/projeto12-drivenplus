import styled from 'styled-components'
import Forms from './Forms'
import logoPlan from '../../assets/images/logoplan.png'
import Modal from './Modal'
import taskList from '../../assets/images/task-list.png'
import money from '../../assets/images/money.png'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext'
import { useContext } from 'react'
import { useState } from 'react'

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
    console.log(plan.perks)
  }, [])

  return (
    <PlanContainer>
      {/* <Modal /> */}
      <img src={plan.image} alt="Driven Plus" />
      <h2>{plan.name}</h2>
      <div>
        <div>
          <img src={taskList} /> <p>Benefícios:</p>
        </div>
        <ol>
          {plan.perks ?
          plan.perks.map(b => (
            <li>
              <a href={b.link}>{b.title}</a>
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
  }

  > div {
    margin-bottom: 34px;
  }

  > div > div {
    display: flex;
    align-items: center;
  }

  > div > div:first-of-type {
    margin-bottom: 10px;
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
