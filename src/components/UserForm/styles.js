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
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  color: #aea5e4;
  font-weight: 600px;
  margin-bottom: 20px;
  margin: 0 auto;
  padding: 8px 0;
`;

export const Error = styled.span`
  font-size: 16px;
  color: red;
  font-weight: 500;
  margin-top: 10px;
`;
