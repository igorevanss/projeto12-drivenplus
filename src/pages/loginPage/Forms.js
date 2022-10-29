import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext'

export default function Forms() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/subscriptions')
    }
  }, [])

  const { setAuth } = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  function signIn(e) {
    e.preventDefault()

    axios
      .post(
        'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login',
        form
      )
      .then(res => {
        setAuth(res.data.token)
        localStorage.setItem('token', res.data.token)
        {if (res.data.membership === null){
          navigate('/subscriptions')
        }}
        
      })
      .catch(res => {
        alert(res.response.data.message)
      })
  }

  function handleForm(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <>
      <form onSubmit={signIn}>
        <Inputs>
          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleForm}
              placeholder="E-mail"
              required
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleForm}
              placeholder="Senha"
              required
            />
          </div>

          <Button type="submit" name="submit">
            <p>ENTRAR</p>
          </Button>
        </Inputs>
      </form>
    </>
  )
}

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

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
