import React, { useState } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormButton, Text } from './NotifiedElements'
require('dotenv').config();

const Notified = () => {

  const url = "https://sarahro.us6.list-manage.com/subscribe/post?u=dbd591405706d15cebc567ffb&amp;id=7acefdd6ad"
  const [email, setEmail] = useState("")

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>SarahRO</Icon>
          <Icon to={{ pathname: "https://swap.sarahro.io/" }} target="_blank">Swap xSRO</Icon>
          <Icon to={{ pathname: "https://apps.sarahro.io/" }} target="_blank">Marketplace xSRO</Icon>
          <Icon to={{ pathname: "https://docs.sarahro.io/" }} target="_blank">Docs SRO</Icon>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => <>
              <FormContent>
                <Form onSubmit={e => { subscribe({ EMAIL: email }); e.preventDefault() }}>
                  <FormH1>GET NOTIFIED WHEN WE GO LIVE</FormH1>
                  <FormInput htmlFor='email' placeholder="Enter your email..." required onChange={e => setEmail(e.target.value)} />
                  <FormButton type='submit'><span className={status === "sending" ? "" : ""}>Get Notified</span></FormButton>
                  {["sending", "error", "success"].includes(status) ? <Text><span >
                    {status === "sending" && <div>Please wait...</div>}
                    {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
                    {status === "success" && <div>Thank you for signing up!</div>}
                  </span></Text> : null}
                </Form>
              </FormContent>
            </>} />
        </FormWrap>
      </Container>
    </>
  )
}

export default Notified
