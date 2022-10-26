import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Forms() {
  return (
    <form>
      <Inputs>
        <div>
          <input
            type="email"
            onChange={'e => setEmail(e.target.value)'}
            placeholder="E-mail"
            required
          />
        </div>
        <div>
          <input
            type="text"
            onChange={'e => setPassword(e.target.value)'}
            placeholder="Senha"
            required
          />
        </div>
        <HorizontalInputs>
          <div>
            <input
              type="email"
              onChange={'e => setEmail(e.target.value)'}
              placeholder="Código de segurança"
              required
            />
          </div>
          <div>
            <input
              type="text"
              onChange={'e => setPassword(e.target.value)'}
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