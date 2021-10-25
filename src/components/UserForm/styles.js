import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 80%;
  outline: 1px solid #8d00ff;
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 15px;
  color: #fff;
  height: 32px;
  display: block;
  width: 60%;
  text-align: center;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  padding: 8px 0;
`;
