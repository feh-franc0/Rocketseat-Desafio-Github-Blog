import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  /* max-width: 74rem; */
  height: 100vh;
  /* margin: 5rem auto; */
  background-color: ${({theme}) => theme["Base-Background"]};
`;