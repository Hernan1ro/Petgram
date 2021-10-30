import styled from "styled-components";

export const Button = styled.button`
  font-weight: bold;
  font-size: 18px;
  background: rgb(72, 219, 210);
  background: linear-gradient(
    90deg,
    rgba(72, 219, 210, 1) 0%,
    rgba(227, 137, 237, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
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
