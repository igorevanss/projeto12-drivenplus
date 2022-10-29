import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Forms() {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)
  
  const [form, setForm] = useState({
    membershipId: '',
    cardName: '',
    cardNumber: '',
    securityNumber: '',
    expirationDate: ''
  })
  const [showModal, setShowModal] = useState(false)

  function handleForm(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function getPlan(e) {
    e.preventDefault()

    axios
      .post(
        'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',
        form,
        { headers: { Authorization: `Bearer ${auth}` } }
      )
      .then(res => {
        localStorage.setItem('token', res.data.token)
        {
          if (res.data.membership === null) {
            navigate('/subscriptions')
          }
        }
      })
      .catch(res => {
        alert(res.response.data.message)
      })

      setShowModal(true)
  }
  return (
    <form onSubmit={getPlan}>
      <Inputs>
        <div>
          <input
            type="text"
            value={form.cardName}
            onChange={handleForm}
            placeholder="Nome impresso no cartão"
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={form.cardNumber}
            onChange={handleForm}
            placeholder="Digitos do cartão"
            required
          />
        </div>
        <HorizontalInputs>
          <div>
            <input
              type="number"
              value={form.securityNumber}
              onChange={handleForm}
              placeholder="Código de segurança"
              required
            />
          </div>
          <div>
            <input
              type="month"
              value={form.expirationDate}
              onChange={handleForm}
              placeholder="Validade"
              required
            />
          </div>
        </HorizontalInputs>
        <Link to={'/subscriptions'}>
          <Button type="submit" name="submit">
            <p>ASSINAR</p>
          </Button>
        </Link>
      </Inputs>
    </form>
  )
}

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div > input {
    width: 299px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    padding-left: 14px;
  }

  > div > input::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #7e7e7e;
  }
`
const HorizontalInputs = styled.div`
  display: flex;
  justify-content: space-between;

  > div > input {
    width: 145px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    padding-left: 6px;
  }

  > div > input::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #7e7e7e;
  }
`
const Button = styled.button`
  width: 299px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  border: none;
  margin-top: 8px;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
`
