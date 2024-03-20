import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "./theme";



export const Button = styled.button`
  background-color  : #DFF5FF;
  border-radius: 5px;
  border: 0px ;
  color: #050505;
  font-size: 0.9em;
  margin: 0;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const Header = styled.header`
  display  : flex;
  background-color: #333;
  color: white;
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

`;

export const BtnLink = styled.button`
    background-color: white;
    padding: 0.9em;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    margin-right: 0.7em;
    margin-top: 0.7em;
`;

export const DetailCont = styled.div`
    background-color: aliceblue;
    padding: 0.5em;
    border-radius: 10px;
    margin-top: 1em;
    h3, h4{
        color: #333;
    }

`;

export const CenteredCont = styled.div`
  height: 100vh;
  width: 70%;
  margin: 0 auto;
`

