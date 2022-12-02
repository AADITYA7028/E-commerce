import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.5s;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  
  background-color: #4285f4;
  color: white;
  font-size: 13px;
  transition: all 0.5s;

  &:hover {
    border: none;
    border-radius: 15px;
    color: #357ae8;
    box-shadow: 0 0 10px #357ae8;
  }
`;

export const invertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all 0.5s; 

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
