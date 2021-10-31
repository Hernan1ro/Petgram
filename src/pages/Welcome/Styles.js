import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { fadeIn } from "../../styles/Animations";

export const Container = styled.div`
  text-align: center;
  ${fadeIn()}
`;
export const Link = styled(LinkRouter)`
  text-decoration: none;
`;
export const Title = styled.h2`
  color: #aea5e4;
  font-weight: 600px;
  margin-bottom: 20px;
  margin: 0 auto;
`;
export const Img = styled.img`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 20px;
`;
export const P = styled.p`
  color: ;
  font-weight: 300;
  margin-top: 20px;
`;
export const Span = styled.span`
  color: #8d00ff;
  font-weight: bolder;
  text-decoration: underline;
`;
