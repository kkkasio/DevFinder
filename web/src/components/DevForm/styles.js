import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 320px;
  background: #fff;
  padding: 30px 20px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;

  @media (max-width: 1000px) {
    & {
      max-width: 100%;
    }
  }
`;
export const Strong = styled.strong`
  font-size: 20px;
  text-align: center;
  display: block;
  color: #333;
`;
export const Form = styled.form`
  margin-top: 30px;

  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    border: 0;
    color: #666;
    border-bottom: 1px solid #eee;
  }
`;

export const LabelBlock = styled.div`
  & {
    margin-top: 20px;
  }
`;

export const LocationBlock = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  label {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: background 0.5s ease-in-out;

  &:hover {
    background: ${darken(0.15, '#7d40e7')};
  }
`;
