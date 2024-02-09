import { styled } from "styled-components";

export const Container = styled.nav`
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  border-top: solid 1px gray;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly
  
`;


export const Box = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`