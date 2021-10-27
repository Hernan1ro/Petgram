import styled from "styled-components";

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 15px;
  color: #fff;
  height: 32px;
  display: block;
  width: 60%;
  text-align: center;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;
