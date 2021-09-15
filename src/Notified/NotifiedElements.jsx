import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
 background: #232B38;
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 25px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #FBBF24;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background-color: #171824;
  max-width: 480px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #FBBF24;
  font-size: 21 px;
  font-weight: bold;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #FFD700;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`
