import styled from "styled-components";
import { fadeIn } from "../../styles/Animations";

export const UserTitle = styled.h2`
  color: #aea5e4;
  font-weight: 500px;
  margin-bottom: 10px;
  margin: 0 auto;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  ${fadeIn()}
`;
