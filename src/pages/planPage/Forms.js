import styled from 'styled-components'

export default function Forms({ setShowModal, form, setForm }) {
  function showModal(e) {
    e.preventDefault()
    setShowModal(true)
  }

  function handleForm(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <form onSubmit={showModal}>
      <Inputs>
        <div>
          <input
            name="cardName"
            type="text"
            value={form.cardName}
            onChange={handleForm}
            placeholder="Nome impresso no cartão"
            required
          />
        </div>
        <div>
          <input
            name="cardNumber"
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
              name="securityNumber"
              type="number"
              value={form.securityNumber}
              onChange={handleForm}
              placeholder="Código de segurança"
              required
            />
          </div>
          <div>
            <input
              name="expirationDate"
              type="month"
              value={form.expirationDate}
              onChange={handleForm}
              placeholder="Validade"
              required
            />
          </div>
        </HorizontalInputs>

        <Button type="submit" name="submit">
          <p>ASSINAR</p>
        </Button>
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
    outline: none;
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
    outline: none;
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
