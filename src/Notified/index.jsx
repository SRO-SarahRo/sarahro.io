import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton } from './NotifiedElements'

const Notified = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>SarahRO</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>GET NOTIFIED WHEN WE GO LIVE</FormH1>
              <FormLabel htmlFor='for'>Email Adress..</FormLabel>
                <FormInput htmlFor='email' required />
              <FormButton type='submit'>Get Notified</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Notified
