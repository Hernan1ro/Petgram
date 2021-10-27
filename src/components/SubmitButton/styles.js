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
  margin: 0 auto;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const UserTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 40px;
  margin-left: 100px;
  color: #8d00ff;
  font-weight: bold;
`;
