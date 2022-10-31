import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'

export default function PlansPage() {
  const [plans, setPlans] = useState([])
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    const promise = axios.get(
      'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',
      { headers: { Authorization: `Bearer ${auth}` } }
    )

    promise.then(res => {
      setPlans(res.data)
    })

    promise.catch(err => {
      console.log(err.response.data.message)
    })
  }, [])

  if (plans.length === 0) {
    return <p>Carregando...</p>
  }

  return (
    <PlansContainer>
      <h2>Escolha seu Plano</h2>
      {plans.map((plan, index) => (
        <Link to={`/subscriptions/${plan.id}`}>
          <PlanStyle key={index}>
            <img src={plan.image} />
            <p>{plan.price}</p>
          </PlanStyle>
        </Link>
      ))}
    </PlansContainer>
  )
}

const PlansContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0e0e13;
  gap: 10px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    margin-bottom: 14px;
  }
`
const PlanStyle = styled.div`
  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 12px;

  > img {
    width: 139.38px;
    height: 95.13px;
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
  }
`
